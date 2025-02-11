import { Answer as AnswerComponent } from "@/components/answer/answer";
import { getQuestion } from "@/scripts/db";

const Answer = ({ params: { id } }: { params: { id: string } }) => {
  const question = getQuestion(id);

  return (
    <main>
      <AnswerComponent question={question} id={id} />
    </main>
  );
};

export default Answer;
