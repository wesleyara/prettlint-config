import { delay } from "essentials-utils";
import { exec } from "shelljs";

import { nodeDependencies, reactDependencies } from "../constants";

import { AddDependenciesProps, DependenciesTypes } from "./models/add-dependencies.models";

export const addDependencies = async ({
  typeProject,
  isTypeScript,
  isTailwind,
  managerMessage,
}: AddDependenciesProps) => {
  const dependenciesObject: DependenciesTypes = {
    dependencies: [],
    dev_dependencies: [],
  };

  typeProject === "React"
    ? dependenciesObject.dev_dependencies.push(...reactDependencies)
    : dependenciesObject.dev_dependencies.push(...nodeDependencies);

  isTypeScript && dependenciesObject.dev_dependencies.push("typescript-eslint");
  isTailwind && dependenciesObject.dev_dependencies.push("eslint-plugin-tailwindcss");

  const dependencies = dependenciesObject.dev_dependencies.join(" ");
  const addMessage = `${managerMessage} ${dependencies} -D`;

  await delay(1000);
  exec(addMessage);
};
