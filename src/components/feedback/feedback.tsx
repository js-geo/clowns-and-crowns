import Image from "next/image";
import { Button } from "../button/button";

export const Feedback: React.FC<{
  open: boolean;
  isCorrect: boolean;
  onClick: () => void;
}> = ({ open, isCorrect, onClick }) => {
  return (
    <dialog open={open} className="h-full w-screen">
      <div className="flex flex-col gap-4 h-full justify-center items-center">
        <span className="font-bold text-4xl text-center px-6">
          {isCorrect ? (
            <>Du bist Champion der Demokratie!</>
          ) : (
            <>Thilo Sarazin hat dich drangekriegt!</>
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

        <Button variant="primary" className="text-center" onClick={onClick}>
          Nächste Frage
        </Button>
      </div>
    </dialog>
  );
};
