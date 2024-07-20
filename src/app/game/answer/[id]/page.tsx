import { Quiz } from "@/components/quiz/quiz";
import { questions } from "./../../../../questions.json";
import { useRouter } from "next/router";
import { Answer as AnswerComponent } from "@/components/answer/answer";

const Answer = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main>
      <AnswerComponent id={id} />
    </main>
  );
};

export default Answer;
