import { existsSync, writeFileSync, mkdirSync } from "fs";

import { settings } from "./constants";

const settingsPath = "./.vscode/settings.json";

export const vsCodeSettings = () => {
  const existingSettings = existsSync(settingsPath);

  if (!existingSettings) {
    const existingFolder = existsSync("./.vscode");

    if (!existingFolder) {
      mkdirSync("./.vscode");
    }

    writeFileSync(settingsPath, JSON.stringify(settings));
  } else {
    console.log("Settings already exists");
    console.log("");
    console.log("Add the following settings to your settings.json file:");
    console.log(JSON.stringify(settings, null, 2));
  }

  return existingSettings;
};
