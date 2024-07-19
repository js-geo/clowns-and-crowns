import Image from "next/image";
import { Button } from "../button/button";

export const Feedback: React.FC<{
  open: boolean;
  isCorrect: boolean;
  onClick: () => void;
}> = ({ open, isCorrect, onClick }) => {
  return (
    <dialog open={open} className="justify-center items-center h-full w-screen">
      <div className="flex flex-col gap-4 h-full justify-center items-center">
        {isCorrect && (
          <Image
            src="/scholz-happy.png"
            alt="scholz with crown"
            width={200}
            height={200}
            className="rounded-lg shadow-md"
          />
        )}
        {isCorrect ? "Right! 🎉" : "Wrong... 😔"}
        <Button
          variant="primary"
          className="w-1/2 text-center"
          onClick={onClick}
        >
          Close
        </Button>
      </div>
    </dialog>
  );
};
