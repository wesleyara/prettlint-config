export const addFiles = async (typeProject: string, isTypeScript: boolean) => {
  const extension = isTypeScript ? "ts" : "js";

  const files = [
    {
      path: `src/templates/ignore.txt`,
      filename: `.eslintignore`,
    },
    {
      path: `src/templates/ignore.txt`,
      filename: `.prettierignore`,
    },
    {
      path: `src/templates/editorconfig.txt`,
      filename: `.editorconfig`,
    },
    {
      path: `src/templates/prettier.txt`,
      filename: `.prettierrc.json`,
    },
  ];

  typeProject === "React"
    ? files.push({
        path: `src/templates/react/eslint-${extension}.txt`,
        filename: `.eslintrc.json`,
      })
    : files.push({
        path: `src/templates/node/eslint-${extension}.txt`,
        filename: `.eslintrc.json`,
      });

  return files.reverse();
};
