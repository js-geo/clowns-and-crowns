import { Quiz } from "@/components/quiz/quiz";
import { questions } from "./../../../../questions.json";
import { getQuestion } from "@/scripts/db";
import Link from "next/link";

const Question = ({ params: { id } }: { params: { id: string } }) => {
  const question = getQuestion(id);

  if (!question) {
    return (
      <div className="h-screen flex flex-col gap-8 justify-center items-center">
        No questions left!
        <Link className="border border-white rounded-lg p-4" href="/">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <main>
      <Quiz question={question} id={id} />
    </main>
  );
};

export default Question;
