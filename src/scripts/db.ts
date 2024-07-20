import { questions } from "../questions.json";

export const getQuestion = (n: number) => {
  return questions[n];
};
