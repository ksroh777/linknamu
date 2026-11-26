"use client";

import LinkIcon, { type IconName } from "@/components/LinkIcon";

type Props = {
  id: string;
  title: string;
  url: string;
  icon?: IconName;
};

/** 클릭수를 서버에 기록한다. 새 탭이 열리는 것을 막지 않도록 응답을 기다리지 않는다. */
function recordClick(id: string) {
  const endpoint = `/api/clicks/${encodeURIComponent(id)}`;
  if (navigator.sendBeacon?.(endpoint)) return;
  fetch(endpoint, { method: "POST", keepalive: true }).catch(() => {});
}

export default function LinkCard({ id, title, url, icon = "link" }: Props) {
  // mailto: 같은 링크는 새 탭으로 열면 빈 탭만 남으므로, 웹 주소만 새 탭으로 연다.
  const isWeb = /^https?:\/\//.test(url);
  return (
    <a
      href={url}
      target={isWeb ? "_blank" : undefined}
      rel={isWeb ? "noopener noreferrer" : undefined}
      onClick={() => recordClick(id)}
      // 글래스모피즘: 반투명 흰 배경 + 배경 흐림 + 얇은 밝은 테두리. 호버는 살짝 밝아지고 1px 뜨는 정도만.
      className="group flex w-full items-center gap-3 rounded-[1.25rem] border border-white/70 bg-white/45 px-5 py-[1.05rem] text-[0.975rem] font-semibold shadow-[0_1px_2px_rgba(120,72,40,0.05),0_10px_24px_-14px_rgba(120,72,40,0.22)] backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_1px_2px_rgba(120,72,40,0.06),0_14px_28px_-14px_rgba(120,72,40,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0 active:bg-white/55 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10 dark:active:bg-white/[0.08]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/70 text-accent ring-1 ring-white/80 dark:bg-white/10 dark:ring-white/10">
        <LinkIcon name={icon} className="h-[1.15rem] w-[1.15rem]" />
      </span>
      <span className="flex-1 text-center">{title}</span>
      {/* 제목이 카드 가운데에 오도록 아이콘과 같은 폭의 빈 공간을 둔다 */}
      <span aria-hidden className="h-9 w-9 shrink-0" />
    </a>
  );
}
