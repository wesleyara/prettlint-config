import fs from "fs";

export const deleteExistsFiles = async () => {
  const files = [
    ".editorconfig",
    ".eslintignore",
    ".prettierignore",
    ".eslintrc",
    ".prettierrc",
    ".eslintrc.json",
    ".prettierrc.json",
    ".eslintrc.js",
    ".prettierrc.js",
    "eslint.config.mjs",
    "eslint.config.js",
    "eslint.config.cjs",
    "eslint.config.ts",
    "eslint.config.cts",
    "eslint.config.mts",
    "prettier.config.mjs",
    "prettier.config.js",
    "prettier.config.cjs",
    "prettier.config.ts",
    "prettier.config.cts",
    "prettier.config.mts",
  ];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  }
};
