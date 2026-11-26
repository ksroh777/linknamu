import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

/**
 * 메인 화면 (wireframe.png 기준)
 * - 상단: 프로필 사진, 이름, 한줄 소개
 * - 아래: 링크 카드 목록 (세로 배치)
 * 표시되는 내용은 src/data/profile.ts 에서 바꾼다.
 */
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[26rem] flex-1 flex-col px-7 pt-16 pb-20 sm:px-8 sm:pt-24">
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      <ul className="mt-11 flex flex-col gap-4 sm:mt-12">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard id={link.id} title={link.title} url={link.url} icon={link.icon} />
          </li>
        ))}
      </ul>
    </main>
  );
}
