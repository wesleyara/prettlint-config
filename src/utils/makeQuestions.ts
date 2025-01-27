import { prompt, QuestionCollection } from "inquirer";

export const makeQuestions = async (questions: QuestionCollection) => {
  const answers = await prompt(questions);

  return answers;
};
