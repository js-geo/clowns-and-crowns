"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../button/button";

export type QuizProps = {
  questions: Array<{
    question: string;
    answers: Array<string>;
    correctAnswer: number;
  }>;
};

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);

    if (index === questions[currentQuestion].correctAnswer) {
      setIsCorrect(true);
    }

    setOpen(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(-1);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-stretch justify-center w-screen h-screen p-4">
      <dialog
        open={open}
        className="justify-center items-center h-screen w-screen "
      >
        <div className="flex flex-col gap-4 h-full justify-center items-center">
          {isCorrect ? "Right" : "Wrong"}
          <Button
            variant="primary"
            className="w-1/2 text-center"
            onClick={() => {
              setOpen(false);
              setIsCorrect(false);
              handleNextQuestion();
            }}
          >
            Close
          </Button>
        </div>
      </dialog>
      <div className=" mx-auto">
        <Image
          src="/cover.png"
          alt="scholz with crown"
          width={200}
          height={200}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className=" text-center mt-auto">
        <h2 className="text-2xl font-bold">
          {questions[currentQuestion].question}
        </h2>
        <p className="text-sm">
          Test your knowledge with this trivia question.
        </p>
      </div>

      <div className="bg-white text-black rounded-3xl px-4 py-16 mt-auto">
        <div className="flex flex-col gap-4 ">
          {questions[currentQuestion].answers.map((answer, index) => (
            <Button
              variant="primary"
              key={index}
              onClick={() => handleAnswerClick(index)}
            >
              {answer}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
