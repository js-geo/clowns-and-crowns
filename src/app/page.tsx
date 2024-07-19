import { Quiz, QuizProps } from "@/components/quiz/quiz";
import { questions } from "./../questions.json";

// const questions = [
//   {
//     question: "Why did Scholz wear an eyepatch once?",
//     answers: [
//       "He had an infection",
//       "He had an accident while jogging",
//       "He wants to become a pirate",
//       "It was carneval",
//     ],
//     correctAnswer: 1,
//   },
//   {
//     question: "From which party comes the following quote:",
//     subline:
//       "'Nach dem furchtbaren politischen, wirtschaftlichen und sozialen Zusammenbruch als Folge einer verbrecherischen Machtpolitik kann nur eine Neuordnung von Grund aus erfolgen. Inhalt und Ziel dieser sozialen und wirtschaftlichen Neuordnung kann nicht mehr als das kapitalistische Gewinn- und Machtstreben, sondern nur das Wohlergehen unseres Volkes sein.'",
//     answers: ["CDU", "Die Grünen", "FDP", "AfD"],
//     correctAnswer: 0,
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     answers: [
//       "Vincent van Gogh",
//       "Pablo Picasso",
//       "Leonardo da Vinci",
//       "Michelangelo",
//     ],
//     correctAnswer: 2,
//   },
// ] as const satisfies QuizProps["questions"];

export default function Home() {
  return (
    <main className="bg-[#695AE0] text-white">
      <Quiz questions={questions} />
    </main>
  );
}
