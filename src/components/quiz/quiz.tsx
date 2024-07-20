"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../button/button";
import { Feedback } from "../feedback/feedback";
import router, { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type Question = {
  question: string;
  subline?: string;
  answers?: Array<string>;
  correctAnswer: string;
  image?: string;
  answer?: string;
  background?: string;
  person?: string;
};

export type QuizProps = {
  question: Question;
  answer?: string;
  id: string;
};

const Question: React.FC<
  Question & {
    handleAnswerClick: (text: string) => void;
  }
> = ({ question, subline, answers, handleAnswerClick, image, answer }) => {
  const [text, setText] = useState("");

  const router = useRouter();

  const id = new URL(window.location.href).pathname.split("/")[3];

  const updatedAnswers = answers && answer ? [...answers, answer] : undefined;

  const answersFinal = updatedAnswers?.sort(() => Math.random() - 0.5);

  return (
    <div>
      <div
        className={twMerge(
          "text-center my-16 pb-14 mx-6",
          answer && "bg-[#3C50E1] px-6 py-9 text-white text-left rounded-[10px]"
        )}
      >
        <span className={twMerge("font-thin", !answer && "text-[#212C7B]")}>
          Question
        </span>
        <h2 className="text-2xl font-bold py-4">{question}</h2>
        {subline && <p className="text-sm">{subline}</p>}
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

      <div className="bg-white text-black rounded-3xl px-6 w-full">
        <div className="flex flex-col justify-center gap-3 ">
          {answersFinal ? (
            <>
              <span className="text-[#A5A5A5]">
                Wähle die richtige Antwort aus
              </span>
              {answersFinal.map((answer, index) => (
                <Button
                  variant="secondary"
                  key={answer}
                  onClick={() => handleAnswerClick(answersFinal[index])}
                >
                  {answer}
                </Button>
              ))}
            </>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/game/answer/${id}/?answer=${text}`);
              }}
              className="flex flex-col"
            >
              <label htmlFor={question} className="sr-only">
                Answer
              </label>
              <textarea
                className=" focus:outline-[#3C50E1] rounded-lg p-4 drop-shadow-lg placeholder:text-[#A5A5A5] font-light"
                placeholder={"Type your answer here..."}
                id={question}
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                }}
              ></textarea>
              <Button variant="primary" type="submit" className="my-8">
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
  const [isCorrect, setIsCorrect] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleAnswerClick = (text: string) => {
    if (text === question.correctAnswer) {
      setIsCorrect(true);
    }

    setOpen(true);
  };

  const handleNextQuestion = () => {
    router.push(`/game/question/${(parseInt(id) + 1).toString()}`);
  };

  return (
    <>
      <Feedback
        isCorrect={isCorrect}
        open={open}
        onClick={() => {
          setOpen(false);
          setIsCorrect(false);
          handleNextQuestion();
        }}
        person={question.person}
      >
        {question.background}
      </Feedback>
      <div className="">
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
    </>
  );
};
