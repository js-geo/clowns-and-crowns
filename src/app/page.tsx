import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col gap-20 justify-center items-center bg-[#3C50E1]">
      <Image src="/logo.png" alt="scholz with crown" width={400} height={400} />
      <Link
        className="text-white py-[0.625rem] px-[4.25rem] bg-[#3C50E1] rounded-[3rem] border border-white hover:bg-[#2c3aa6]"
        href="/game/question/0"
      >
        Beginne ein neues Spiel
      </Link>
    </main>
  );
}
