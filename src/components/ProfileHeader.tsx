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
      {/* 흰 테두리 + 따뜻한 색의 겹 그림자로 사진이 살짝 떠 보이게 한다 */}
      <div className="rounded-[1.75rem] bg-white/70 p-1.5 shadow-[0_1px_2px_rgba(120,72,40,0.08),0_12px_28px_-10px_rgba(120,72,40,0.28),0_28px_56px_-24px_rgba(201,119,75,0.35)] ring-1 ring-white/80 dark:bg-white/10 dark:ring-white/10">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={176}
          height={224}
          priority
          className="h-48 w-[9.5rem] rounded-[1.35rem] object-cover sm:h-52 sm:w-40"
        />
      </div>
      <h1 className="mt-7 text-[1.625rem] leading-tight font-bold tracking-[-0.02em]">{name}</h1>
      <p className="mt-2.5 max-w-[20rem] text-[0.9375rem] leading-relaxed text-balance text-muted">{bio}</p>
    </header>
  );
}
