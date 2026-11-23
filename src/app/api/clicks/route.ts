import { connection } from "next/server";
import { getClickCounts } from "@/lib/clicks";
import { profile } from "@/data/profile";

/** 링크별 클릭수를 조회한다. 예: GET /api/clicks */
export async function GET() {
  // 빌드 시점에 고정되지 않고 매 요청마다 최신 값을 읽도록 한다.
  await connection();

  const counts = await getClickCounts();
  const links = profile.links.map((link) => ({
    id: link.id,
    title: link.title,
    clicks: counts[link.id] ?? 0,
  }));

  return Response.json({ links });
}
