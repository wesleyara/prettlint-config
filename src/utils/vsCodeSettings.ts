import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";

import { deepClone } from ".";
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
    const fileSettings = JSON.parse(readFileSync(settingsPath, "utf8"));
    const newFileSettings = deepClone(fileSettings);

    for (const key in settings) {
      if (!newFileSettings[key]) {
        newFileSettings[key] = settings[key];
      }
    }

    if (JSON.stringify(fileSettings) !== JSON.stringify(newFileSettings)) {
      writeFileSync(settingsPath, JSON.stringify(newFileSettings));
    }
  }

  return existingSettings;
};
