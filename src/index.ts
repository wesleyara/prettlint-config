import { delay } from "essentials-utils";

import {
  addDependencies,
  addFiles,
  download,
  existsFile,
  makeQuestions,
  packageManager,
  vsCodeSettings,
} from "./utils";
import { initialQuestions, tailwindQuestions } from "./utils/constants";

(async () => {
  const { typeProject, isTypeScript } = await makeQuestions(initialQuestions);
  const isTypeScriptBool = isTypeScript === "Yes";
  let isTailwindBool = false;

  if (typeProject === "React") {
    const response = await makeQuestions(tailwindQuestions);

    isTailwindBool = response.isTailwind === "Yes";
  }
  console.log("Installing dependencies...");
  console.log("");

  const managerMessage = await packageManager();
  await addDependencies({
    typeProject,
    isTypeScript: isTypeScriptBool,
    isTailwind: isTailwindBool,
    managerMessage,
  });

  const files = await addFiles({
    typeProject,
    isTypeScript: isTypeScriptBool,
    isTailwind: isTailwindBool,
  });
  console.log("Deleting existing files...");
  console.log("");

  const filenames = files.map(file => file.filename);
  await existsFile(filenames);

  for (const file of files) {
    console.log(`Downloading ${file.filename}...`);
    await delay(200);
    await download(file.path, file.filename);
  }
  console.log("");
  console.log("Adding vscode settings...");
  vsCodeSettings();

  console.log("Done!");
})();
