import Image from "next/image";
import { Button } from "../button/button";
import { ComponentProps } from "react";
import { Question } from "../quiz/quiz";

export const Feedback: React.FC<
  ComponentProps<"dialog"> & {
    open: boolean;
    isCorrect: boolean;
    onClick: () => void;
    question?: Question;
  }
> = ({ open, isCorrect, onClick, children, question }) => {
  return (
    <dialog open={open} className="bg-white h-[100vh] w-screen">
      <div className="flex flex-col gap-8 h-full items-center px-6 mt-16">
        <span className="font-bold text-4xl text-center">
          {isCorrect ? (
            <>Du bist Champion der Demokratie!</>
          ) : (
            <>
              {question?.person ? (
                <>{question.person} hat dich drangekriegt!</>
              ) : (
                <>Das war leider falsch!</>
              )}
            </>
          )}
        </span>
        {isCorrect && (
          <Image
            src="/thumbs-up.png"
            alt="scholz with crown"
            width={200}
            height={200}
          />
        )}
        <div className="text-left border-2 border-[#3AB795] drop-shadow-md p-6 pt-0 rounded-xl bg-white">
          <div className="flex flex-row text-[#3AB795]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="50"
              viewBox="0 0 36 50"
              fill="none"
            >
              <path
                d="M33 0L34.5 2L36 4H33V0Z"
                fill="#3AB795"
                fillOpacity="0.3"
              />
              <path
                d="M0 0H16.5H33V27.1426C33 28.0054 32.6285 28.8265 31.9803 29.3961L18.4803 41.2597C17.3477 42.255 15.6523 42.255 14.5197 41.2597L1.01966 29.3961C0.371517 28.8265 0 28.0054 0 27.1426V0Z"
                fill="#3AB795"
              />
            </svg>
            <span className="ml-3 mt-4">Lösung</span>
          </div>
          {children} Die richtige Antwort ist {`"${question?.correctAnswer}"`}.
        </div>
        <Button
          variant="primary"
          className="text-center mb-16"
          onClick={onClick}
        >
          Nächste Frage
        </Button>
      </div>
    </dialog>
  );
};
