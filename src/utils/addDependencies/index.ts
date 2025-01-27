import { delay } from "essentials-utils";
import { exec } from "shelljs";

import { dependenciesMap } from "../constants";
import {
  AddDependenciesProps,
  DependenciesMapType,
  DependenciesTypes,
} from "./models/add-dependencies.models";

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

  dependenciesObject.dev_dependencies.push(
    ...dependenciesMap[typeProject.toLowerCase() as DependenciesMapType],
  );

  isTypeScript && dependenciesObject.dev_dependencies.push("typescript-eslint");
  isTailwind && dependenciesObject.dev_dependencies.push("eslint-plugin-tailwindcss");

  const dependencies = dependenciesObject.dev_dependencies.join(" ");
  const addMessage = `${managerMessage} ${dependencies} -D`;

  await delay(1000);
  exec(addMessage);
};
