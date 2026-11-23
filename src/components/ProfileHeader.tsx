import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image: string;
};

/** 메인 화면 상단: 세로 직사각형 프로필 사진, 이름, 한줄 소개 */
export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={176}
        height={224}
        priority
        className="h-56 w-44 rounded-lg object-cover ring-4 ring-white shadow-md dark:ring-neutral-800"
      />
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{bio}</p>
    </header>
  );
}
