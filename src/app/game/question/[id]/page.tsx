import { Quiz } from "@/components/quiz/quiz";
import { getQuestion } from "@/scripts/db";
import Link from "next/link";

const Question = ({ params: { id } }: { params: { id: string } }) => {
  const question = getQuestion(id);

  if (!question) {
    return (
      <div className="flex flex-col gap-8 justify-center items-center mt-[20rem]">
        Keine Fragen übrig!
        <Link
          className="text-white py-[0.625rem] px-[4.25rem] bg-[#3C50E1] rounded-[3rem]"
          href="/"
        >
          Zum Start
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
