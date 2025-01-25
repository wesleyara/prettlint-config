import { existsSync } from "fs";

export const packageManager = async () => {
  let manager = "npm install";

  if (existsSync("yarn.lock")) {
    manager = "yarn add";
  }

  if (existsSync("pnpm-lock.yaml")) {
    manager = "pnpm add";
  }

  if (existsSync("bun.lockb")) {
    manager = "bun add";
  }

  return manager;
};
