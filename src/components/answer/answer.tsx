"use client";

import { useSearchParams } from "next/navigation";
import { Question, Quiz } from "../quiz/quiz";

export const Answer = ({
  question,
  id,
}: {
  question: Question;
  id: string;
}) => {
  const searchParams = useSearchParams();

  const answer = searchParams.get("answer");

  return (
    <>
      <Quiz question={question} answer={answer ?? ""} id={id} />
    </>
  );
};
