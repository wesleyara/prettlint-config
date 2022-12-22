import { existsSync } from "fs";

export const packageManager = async () => {
  const manager = existsSync("package-lock.json") ? "npm" : "yarn";

  return manager;
};
