import { addDependencies } from "./utils/addDependencies";
import { makeQuestions } from "./utils/makeQuestions";
import { packageManager } from "./utils/packageManager";

const main = async () => {
  const { typeProject, isTypeScript } = await makeQuestions();

  const managerMessage = await packageManager();
  await addDependencies(typeProject, isTypeScript, managerMessage);
};

main();
