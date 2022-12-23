import { existsSync } from "fs";

export const packageManager = async () => {
  const manager = existsSync("yarn.lock") ? "yarn add" : "npm install";

  return manager;
};
