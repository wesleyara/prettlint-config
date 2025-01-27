import { QuestionCollection } from "inquirer";

export const reactDependencies = [
  "@eslint/js",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-perfectionist",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "eslint-plugin-react-refresh",
  "globals",
  "prettier",
];

export const vueDependencies = [
  "@eslint/js",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-perfectionist",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "eslint-plugin-react-refresh",
  "globals",
  "prettier",
  "eslint-plugin-vue",
];

export const nodeDependencies = [
  "@eslint/js",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-perfectionist",
  "eslint-plugin-prettier",
  "globals",
  "prettier",
];

export const dependenciesMap = {
  react: reactDependencies,
  node: nodeDependencies,
  vue: vueDependencies,
};

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
    choices: ["React", "Node", "Vue"],
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
