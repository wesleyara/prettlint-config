import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import pluginVue from "eslint-plugin-vue";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { ignores: ["node_modules/", "dist/", "build/", "coverage/", "lib/"] },
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  ...pluginVue.configs["flat/essential"],
  {
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
    plugins: {
      perfectionist,
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          tabWidth: 2,
          semi: true,
          trailingComma: "all",
          printWidth: 100,
          endOfLine: "auto",
          arrowParens: "avoid",
        },
      ],
      "perfectionist/sort-imports": "error",
      "perfectionist/sort-modules": "error",
      "perfectionist/sort-named-imports": "error",
      "perfectionist/sort-union-types": "error",
      "tailwindcss/classnames-order": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
    },
  },
];
