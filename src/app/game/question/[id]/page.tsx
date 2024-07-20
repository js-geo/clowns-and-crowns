import { Quiz } from "@/components/quiz/quiz";
import { questions } from "./../../../../questions.json";

const Question = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main>
      <Quiz questions={questions} id={id} />
    </main>
  );
};

export default Question;
