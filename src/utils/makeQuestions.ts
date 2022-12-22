import { prompt } from "inquirer";
export const makeQuestions = async () => {
  const questions = [
    {
      type: "list",
      name: "typeProject",
      message: "Is this project in Node or React?",
      choices: ["React", "Node"],
      default: "React",
    },
    {
      type: "list",
      name: "isTypeScript",
      message: "Is this project in TypeScript?",
      choices: ["Yes", "No"],
      default: "Yes",
    },
  ];

  const answers = await prompt(questions);

  return answers;
};
