import { AddFilesProps } from "./models/add-files.models";

export const addFiles = async ({ typeProject, isTypeScript, isTailwind }: AddFilesProps) => {
  const extension = isTypeScript ? "ts" : "js";
  const folder = typeProject === "React" ? "react" : "node";
  const file = isTailwind ? "eslint-with-tailwind" : "eslint";

  const files = [
    {
      path: `src/templates/editorconfig.txt`,
      filename: `.editorconfig`,
    },
  ];

  const path = `src/templates/${folder}/${file}-${extension}.txt`;

  console.log(path);

  files.push({
    path,
    filename: `eslint.config.mjs`,
  });

  return files.reverse();
};
