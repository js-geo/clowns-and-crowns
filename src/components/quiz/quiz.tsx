"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../button/button";
import { Feedback } from "../feedback/feedback";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  const id = pathname.split("/")[3];

  const updatedAnswers = answers && answer ? [...answers, answer] : undefined;

  const answersFinal = updatedAnswers?.sort(() => Math.random() - 0.5);

  return (
    <div>
      <div
        className={twMerge(
          "text-center mt-16 mb-8 pb-14 mx-6",
          answer && "bg-[#3C50E1] px-6 py-9 text-white text-left rounded-[10px]"
        )}
      >
        <span className={twMerge("font-thin", !answer && "text-[#212C7B]")}>
          Frage
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

      {answersFinal && (
        <div className="flex flex-col items-center">
          <svg
            className="size-12 my-4"
            viewBox="0 0 42 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.4194 3.05593C27.6174 2.54036 27.3607 1.95941 26.836 1.78685C23.8659 0.80992 20.7066 0.525787 17.6015 0.962192C14.1659 1.44506 10.9096 2.79418 8.13916 4.88257C5.36871 6.97097 3.17521 9.72995 1.76509 12.8999C0.490661 15.7648 -0.106005 18.8802 0.0154171 22.0045C0.0368645 22.5564 0.524659 22.9632 1.07482 22.9148L2.0894 22.8255C2.63956 22.7771 3.0433 22.2918 3.02653 21.7398C2.94713 19.1262 3.45679 16.5236 4.52302 14.1267C5.72497 11.4248 7.59467 9.07305 9.95613 7.29295C12.3176 5.51285 15.0932 4.3629 18.0216 3.95131C20.6194 3.5862 23.2618 3.81278 25.7525 4.6087C26.2785 4.77681 26.8563 4.5223 27.0543 4.00673L27.4194 3.05593Z"
              fill="#0496FF"
            />
            <circle cx="21.5527" cy="22.3158" r="16.0263" fill="white" />
            <path
              d="M21.5182 5.70233C18.2392 5.70233 15.0338 6.67467 12.3074 8.49639C9.581 10.3181 7.45603 12.9074 6.20121 15.9368C4.94639 18.9662 4.61807 22.2997 5.25778 25.5157C5.89748 28.7317 7.47647 31.6858 9.79508 34.0044C12.1137 36.323 15.0678 37.902 18.2838 38.5417C21.4998 39.1814 24.8332 38.853 27.8626 37.5982C30.8921 36.3434 33.4813 34.2184 35.3031 31.492C37.1248 28.7656 38.0971 25.5603 38.0971 22.2813C38.0925 17.8857 36.3443 13.6715 33.2361 10.5633C30.128 7.45517 25.9137 5.70697 21.5182 5.70233ZM21.5182 36.3096C18.7436 36.3096 16.0314 35.4869 13.7244 33.9454C11.4175 32.404 9.61944 30.213 8.55767 27.6497C7.4959 25.0863 7.21809 22.2657 7.75937 19.5445C8.30066 16.8233 9.63673 14.3236 11.5986 12.3617C13.5605 10.3998 16.0601 9.06378 18.7814 8.52249C21.5026 7.9812 24.3232 8.25901 26.8866 9.32078C29.4499 10.3826 31.6408 12.1806 33.1823 14.4875C34.7238 16.7945 35.5465 19.5067 35.5465 22.2813C35.5423 26.0005 34.0629 29.5662 31.433 32.1961C28.8031 34.8261 25.2374 36.3054 21.5182 36.3096ZM31.7206 22.2813C31.7206 22.6195 31.5862 22.9439 31.3471 23.1831C31.1079 23.4222 30.7835 23.5566 30.4453 23.5566H21.5182C21.1799 23.5566 20.8556 23.4222 20.6164 23.1831C20.3772 22.9439 20.2429 22.6195 20.2429 22.2813V13.3542C20.2429 13.0159 20.3772 12.6915 20.6164 12.4524C20.8556 12.2132 21.1799 12.0788 21.5182 12.0788C21.8564 12.0788 22.1808 12.2132 22.4199 12.4524C22.6591 12.6915 22.7935 13.0159 22.7935 13.3542V21.006H30.4453C30.7835 21.006 31.1079 21.1403 31.3471 21.3795C31.5862 21.6187 31.7206 21.943 31.7206 22.2813Z"
              fill="black"
            />
          </svg>
        </div>
      )}

      <div className="bg-white text-black rounded-3xl px-6 w-full -z-10">
        <div className="flex flex-col justify-center gap-3 mb-8">
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
                className=" focus:outline-[#3C50E1] rounded-lg p-4 drop-shadow-lg placeholder:text-[#A5A5A5] font-light h-[15rem] border border-[#cdcdcd]"
                placeholder={"Füge hier deine Antwort ein..."}
                id={question}
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                }}
              ></textarea>
              <Button variant="primary" type="submit" className="my-8">
                Absenden
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

  router.prefetch(`/game/question/${(parseInt(id) + 1).toString()}`);

  if (open) {
    return (
      <Feedback
        isCorrect={isCorrect}
        open={open}
        onClick={() => {
          setOpen(false);
          setIsCorrect(false);
          router.push(`/game/question/${(parseInt(id) + 1).toString()}`);
        }}
        question={question}
      >
        {question.background}
      </Feedback>
    );
  }

  return (
    <>
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
