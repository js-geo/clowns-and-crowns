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
    <dialog
      open={open}
      className="bg-white h-[calc(100vh-60px)] w-screen fixed top-[60px]"
    >
      <div className="flex flex-col gap-4 h-full justify-center items-center px-6">
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
        <div className="text-center">
          {children} Die richtige Antwort ist {`"${question?.correctAnswer}"`}.
        </div>
        <Button variant="primary" className="text-center" onClick={onClick}>
          Nächste Frage
        </Button>
      </div>
    </dialog>
  );
};
