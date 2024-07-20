import { questions } from "../questions.json";

export const getQuestion = (id: string) => {
  return questions[parseInt(id)];
};
