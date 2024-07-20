import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen flex justify-center items-center mt-[20rem]">
      <Link
        className="text-white py-[0.625rem] px-[4.25rem] bg-[#3C50E1] rounded-[3rem]"
        href="/game/question/0"
      >
        Start a new game
      </Link>
    </main>
  );
}
