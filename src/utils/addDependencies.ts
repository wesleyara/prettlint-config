import { exec } from "shelljs";
import { delay } from "utils-react";

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

  isTypeScript === "Yes" &&
    dependenciesObject.dev_dependencies.push(
      "@typescript-eslint/eslint-plugin@6.7.0",
      "@typescript-eslint/parser@6.7.0",
    );

  const dependencies = dependenciesObject.dev_dependencies.join(" ");
  const addMessage = `${managerMessage} ${dependencies} -D`;

  await delay(1000);
  exec(addMessage);
};
