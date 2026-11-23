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
  name: "노경식",
  bio: "로봇 관련 개발, 사업 : 요즘은 Physical AI에 관심이 많아요!",
  image: "/profile.jpg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/ksroh777", icon: "github" },
    { id: "email", title: "이메일", url: "mailto:ksroh777@gmail.com", icon: "email" },
    {
      id: "linkedin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/경식-노-30b40075",
      icon: "linkedin",
    },
  ],
};
