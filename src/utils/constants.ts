export const reactDependencies = [
  "@eslint/js",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-import",
  "eslint-plugin-prettier",
  "eslint-plugin-react",
  "eslint-plugin-react-hooks",
  "eslint-plugin-react-refresh",
  "globals",
  "prettier",
];

export const nodeDependencies = [
  "@eslint/js",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-import",
  "eslint-plugin-prettier",
  "globals",
  "prettier",
];

export const settings: { [key: string]: boolean | object } = {
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
  },
};
