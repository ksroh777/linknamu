import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

/**
 * 메인 화면 (wireframe.png 기준)
 * - 상단: 원형 프로필 사진, 이름, 한줄 소개
 * - 아래: 링크 카드 목록 (세로 배치)
 * 표시되는 내용은 src/data/profile.ts 에서 바꾼다.
 */
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-12">
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      <ul className="mt-8 flex flex-col gap-4">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard id={link.id} title={link.title} url={link.url} icon={link.icon} />
          </li>
        ))}
      </ul>
    </main>
  );
}
