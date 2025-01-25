export const addFiles = async (typeProject: string, isTypeScript: boolean) => {
  const extension = isTypeScript ? "ts" : "js";

  const files = [
    {
      path: `src/templates/editorconfig.txt`,
      filename: `.editorconfig`,
    },
  ];

  typeProject === "React"
    ? files.push({
        path: `src/templates/react/eslint-${extension}.txt`,
        filename: `eslint.config.mjs`,
      })
    : files.push({
        path: `src/templates/node/eslint-${extension}.txt`,
        filename: `eslint.config.mjs`,
      });

  return files.reverse();
};
