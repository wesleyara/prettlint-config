import { delay } from "utils-react";

import { addDependencies } from "./utils/addDependencies";
import { addFiles } from "./utils/addFiles";
import { download } from "./utils/download";
import { existsFile } from "./utils/existsFile";
import { makeQuestions } from "./utils/makeQuestions";
import { packageManager } from "./utils/packageManager";

const main = async () => {
  const { typeProject, isTypeScript } = await makeQuestions();
  console.log("Installing dependencies...");
  console.log("");

  const managerMessage = await packageManager();
  await addDependencies(typeProject, isTypeScript, managerMessage);

  const files = await addFiles(typeProject, isTypeScript);
  console.log("Deleting existing files...");
  console.log("");
  await existsFile(files.map(file => file.filename));

  for (let i = 0; i < files.length; i++) {
    const element = files[i];

    console.log(`Downloading ${element.filename}...`);
    await delay(200);
    await download(element.path, element.filename);
  }

  console.log("Done!");
};

main();
