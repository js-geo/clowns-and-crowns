"use client";

import { useSearchParams } from "next/navigation";
import { Quiz } from "../quiz/quiz";
import { questions } from "./../../questions.json";

export const Answer = ({ id }: { id: string }) => {
  const searchParams = useSearchParams();

  const answer = searchParams.get("answer");

  return (
    <>
      <Quiz questions={questions} answer={answer ?? ""} id={id} />
    </>
  );
};
