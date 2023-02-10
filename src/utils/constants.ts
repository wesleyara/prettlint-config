export const reactDependencies = [
  "eslint",
  "eslint-config-prettier",
  "eslint-config-standard",
  "eslint-plugin-import",
  "eslint-plugin-import-helpers",
  "eslint-plugin-n",
  "eslint-plugin-prettier",
  "eslint-plugin-promise",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "prettier",
];

export const nodeDependencies = [
  "eslint",
  "eslint-config-prettier",
  "eslint-config-standard",
  "eslint-plugin-import",
  "eslint-plugin-import-helpers",
  "eslint-plugin-n",
  "eslint-plugin-prettier",
  "eslint-plugin-promise",
  "prettier",
];

export const settings: any = {
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  "prettier.configPath": "./.prettierrc.json",
};
