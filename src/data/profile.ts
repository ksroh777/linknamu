import type { IconName } from "@/components/LinkIcon";

export type LinkItem = {
  /** 클릭수 집계에 쓰는 고유 ID. 한 번 정하면 바꾸지 않는다 (바꾸면 클릭수가 0부터 다시 시작). */
  id: string;
  title: string;
  url: string;
  icon?: IconName;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 경로 (예: "/profile.jpg"). */
  image: string;
  links: LinkItem[];
};

// TODO: 아래는 화면 확인용 더미 값입니다. 진짜 내용으로 교체하세요.
// 프로필 사진은 public/ 폴더에 넣고 image 경로를 바꾸면 됩니다 (예: "/profile.jpg").
export const profile: Profile = {
  name: "홍길동",
  bio: "한 줄 소개가 들어갈 자리입니다",
  image: "/profile-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/", icon: "github" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" },
    { id: "blog", title: "Blog", url: "https://example.com/", icon: "blog" },
  ],
};
