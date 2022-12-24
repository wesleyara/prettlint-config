import { delay } from "utils-react";

import {
  vsCodeSettings,
  addDependencies,
  addFiles,
  download,
  existsFile,
  makeQuestions,
  packageManager,
} from "./utils";

const main = async () => {
  const { typeProject, isTypeScript } = await makeQuestions();
  console.log("Installing dependencies...");
  console.log("");

  const managerMessage = await packageManager();
  await addDependencies(typeProject, isTypeScript, managerMessage);

  const files = await addFiles(typeProject, isTypeScript === "Yes");
  console.log("Deleting existing files...");
  console.log("");
  await existsFile(files.map(file => file.filename));

  for (let i = 0; i < files.length; i++) {
    const element = files[i];

    console.log(`Downloading ${element.filename}...`);
    await delay(200);
    await download(element.path, element.filename);
  }

  console.log("");
  console.log("Adding vscode settings...");
  vsCodeSettings();

  console.log("Done!");
};

main();
