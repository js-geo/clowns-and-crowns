import { Quiz, QuizProps } from "@/components/quiz/quiz";

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the largest ocean in the world?",
    answers: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: 3,
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correctAnswer: 2,
  },
] as const satisfies QuizProps["questions"];

export default function Home() {
  return (
    <main className="bg-[#695AE0] text-white">
      <Quiz questions={questions} />
    </main>
  );
}
