"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../button/button";
import { Feedback } from "../feedback/feedback";
import router, { useRouter } from "next/navigation";

export type Question = {
  question: string;
  subline?: string;
  answers?: Array<string>;
  correctAnswer: number | string;
  image?: string;
  answer?: string;
};

export type QuizProps = {
  question: Question;
  answer?: string;
  id: string;
};

const Question: React.FC<
  Question & {
    handleAnswerClick: (index?: number, answer?: string) => void;
  }
> = ({ question, subline, answers, handleAnswerClick, image, answer }) => {
  const [text, setText] = useState("");

  const router = useRouter();

  const id = new URL(window.location.href).pathname.split("/")[3];

  return (
    <div className="flex flex-col gap-8 items-center h-full p-4">
      <div className=" text-center mt-auto">
        <h2 className="text-2xl font-bold">{question}</h2>
        <p className="text-sm">{subline}</p>
      </div>

      {image && (
        <div>
          <Image
            src={image}
            alt="scholz with crown"
            width={200}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="bg-white text-black rounded-3xl px-4 py-16 w-full mt-auto">
        <div className="flex flex-col gap-4 ">
          {answers && answer ? (
            [...answers, answer].map((answer, index) => (
              <Button
                variant="primary"
                key={answer}
                onClick={() => handleAnswerClick(index)}
              >
                {answer}
              </Button>
            ))
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                // handleAnswerClick(undefined, text);
                router.push(`/game/answer/${id}/?answer=${text}`);
              }}
              className="flex flex-col gap-6"
            >
              <label htmlFor={question} className="sr-only">
                Answer
              </label>
              <textarea
                className="border border-[#695AE0 focus:outline-[#695AE0] rounded-lg p-4"
                placeholder={"Type your answer here..."}
                id={question}
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                }}
              ></textarea>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export const Quiz: React.FC<QuizProps> = ({ question, answer, id }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleAnswerClick = (index?: number, text?: string) => {
    if (index === question.correctAnswer) {
      setIsCorrect(true);
    }

    if (text === question.correctAnswer) {
      setIsCorrect(true);
    }

    setOpen(true);
  };

  const handleNextQuestion = () => {
    router.push(`/game/question/${(parseInt(id) + 1).toString()}`);
  };

  if (currentQuestion === -1) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        Out of questions!
      </div>
    );
  }

  return (
    <div className="w-screen h-screen">
      <Feedback
        isCorrect={isCorrect}
        open={open}
        onClick={() => {
          setOpen(false);
          setIsCorrect(false);
          handleNextQuestion();
        }}
      />

      <Question
        question={question.question}
        subline={question.subline}
        answers={question.answers}
        answer={answer}
        handleAnswerClick={handleAnswerClick}
        image={question.image}
        correctAnswer={question.correctAnswer}
      />
    </div>
  );
};
