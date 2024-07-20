"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../button/button";
import { Feedback } from "../feedback/feedback";
import router, { useRouter } from "next/navigation";

type QuizQuestion = {
  question: string;
  subline?: string;
  answers?: Array<string>;
  correctAnswer: number | string;
  image?: string;
  answer?: string;
};

export type QuizProps = {
  questions: Array<QuizQuestion>;
  answer?: string;
  id: string;
};

const QuizQuestion: React.FC<
  QuizQuestion & {
    handleAnswerClick: (index?: number, answer?: string) => void;
  }
> = ({ question, subline, answers, handleAnswerClick, image, answer }) => {
  const [text, setText] = useState("");

  const router = useRouter();

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
                handleAnswerClick(undefined, text);
                router.push(`/game/answer?answer=${text}`);
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

export const Quiz: React.FC<QuizProps> = ({ questions, answer, id }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleAnswerClick = (index?: number, text?: string) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setIsCorrect(true);
    }

    if (text === questions[currentQuestion].correctAnswer) {
      setIsCorrect(true);
    }

    setOpen(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      router.push("/game/question");
    }

    setCurrentQuestion(-1);
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

      {answer ? (
        <QuizQuestion
          question={questions[currentQuestion].question}
          subline={questions[currentQuestion].subline}
          answers={questions[currentQuestion].answers}
          answer={answer}
          handleAnswerClick={handleAnswerClick}
          image={questions[currentQuestion].image}
          correctAnswer={questions[currentQuestion].correctAnswer}
        />
      ) : (
        <QuizQuestion
          question={questions[currentQuestion].question}
          subline={questions[currentQuestion].subline}
          answers={questions[currentQuestion].answers}
          handleAnswerClick={handleAnswerClick}
          image={questions[currentQuestion].image}
          correctAnswer={questions[currentQuestion].correctAnswer}
        />
      )}
    </div>
  );
};
