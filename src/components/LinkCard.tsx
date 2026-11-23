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
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(id)}
      className="flex w-full items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-md active:translate-y-0 active:bg-emerald-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:active:bg-neutral-700"
    >
      <LinkIcon name={icon} className="h-6 w-6 shrink-0 text-emerald-600" />
      <span className="flex-1 text-center">{title}</span>
      {/* 제목이 카드 가운데에 오도록 아이콘과 같은 폭의 빈 공간을 둔다 */}
      <span aria-hidden className="h-6 w-6 shrink-0" />
    </a>
  );
}
