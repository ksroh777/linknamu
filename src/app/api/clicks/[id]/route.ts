import { incrementClick } from "@/lib/clicks";
import { profile } from "@/data/profile";

const linkIds = new Set(profile.links.map((link) => link.id));

/** 링크 카드를 클릭하면 호출된다. 해당 링크의 클릭수를 1 늘린다. */
export async function POST(_req: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  if (!linkIds.has(id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  await incrementClick(id);
  return new Response(null, { status: 204 });
}
