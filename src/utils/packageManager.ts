import { existsSync } from "fs";

export const packageManager = async () => {
  const manager = existsSync("package-lock.json") ? "npm install" : "yarn add";

  return manager;
};
