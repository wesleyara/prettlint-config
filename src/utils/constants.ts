import { QuestionCollection } from "inquirer";

export const reactDependencies = [
  "@eslint/js",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-import",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "eslint-plugin-react-refresh",
  "globals",
  "prettier",
];

export const nodeDependencies = [
  "@eslint/js",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-import",
  "eslint-plugin-prettier",
  "globals",
  "prettier",
];

export const settings: { [key: string]: boolean | object } = {
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
  },
};

export const initialQuestions: QuestionCollection = [
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

export const tailwindQuestions: QuestionCollection = [
  {
    type: "list",
    name: "isTailwind",
    message: "Do you want to use Tailwind CSS?",
    choices: ["Yes", "No"],
    default: "Yes",
  },
];
