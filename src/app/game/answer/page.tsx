import { Quiz } from "@/components/quiz/quiz";
import { questions } from "./../../../questions.json";
import { useRouter } from "next/router";
import { Answer } from "@/components/answer/answer";

export default function Home() {
  return (
    <main>
      <Answer />
    </main>
  );
}
