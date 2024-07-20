import { Quiz, QuizProps } from "@/components/quiz/quiz";
import { questions } from "./../questions.json";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Link
        className="border border-white rounded-lg p-4"
        href="/game/question/0"
      >
        Start a new game
      </Link>
    </main>
  );
}
