import { Quiz } from "@/components/quiz/quiz";
import { questions } from "./../../../questions.json";

export default function Home() {
  return (
    <main>
      <Quiz questions={questions} />
    </main>
  );
}
