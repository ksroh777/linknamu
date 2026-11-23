import { MongoClient } from "mongodb";

/**
 * 링크 클릭수 저장소.
 * - MONGODB_URI 환경변수가 있으면 MongoDB Atlas에 저장한다.
 * - 없으면 서버 메모리에 저장한다 (로컬 개발용, 서버를 재시작하면 초기화됨).
 */

type ClickDoc = { _id: string; count: number };

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

declare global {
  // 개발 모드에서 핫 리로드될 때 연결/데이터가 중복 생성되지 않도록 전역에 보관한다.
  var _linknamuMongo: Promise<MongoClient> | undefined;
  var _linknamuMemoryClicks: Map<string, number> | undefined;
}

async function getCollection() {
  if (!uri) return null;
  globalThis._linknamuMongo ??= new MongoClient(uri).connect();
  const client = await globalThis._linknamuMongo;
  return client.db(dbName).collection<ClickDoc>("clicks");
}

function getMemoryStore() {
  globalThis._linknamuMemoryClicks ??= new Map();
  return globalThis._linknamuMemoryClicks;
}

export async function incrementClick(linkId: string): Promise<void> {
  const collection = await getCollection();
  if (collection) {
    await collection.updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });
    return;
  }
  const store = getMemoryStore();
  store.set(linkId, (store.get(linkId) ?? 0) + 1);
}

export async function getClickCounts(): Promise<Record<string, number>> {
  const collection = await getCollection();
  if (collection) {
    const docs = await collection.find().toArray();
    return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  }
  return Object.fromEntries(getMemoryStore());
}
