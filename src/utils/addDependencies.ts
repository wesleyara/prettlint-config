import { delay } from "essentials-utils";
import { exec } from "shelljs";

import { IDependencies } from "../@types";

import { nodeDependencies, reactDependencies } from "./constants";

export const addDependencies = async (
  typeProject: string,
  isTypeScript: string,
  managerMessage: string,
) => {
  const dependenciesObject: IDependencies = {
    dependencies: [],
    dev_dependencies: [],
  };

  typeProject === "React"
    ? dependenciesObject.dev_dependencies.push(...reactDependencies)
    : dependenciesObject.dev_dependencies.push(...nodeDependencies);

  isTypeScript === "Yes" && dependenciesObject.dev_dependencies.push("typescript-eslint");

  const dependencies = dependenciesObject.dev_dependencies.join(" ");
  const addMessage = `${managerMessage} ${dependencies} -D`;

  await delay(1000);
  exec(addMessage);
};
