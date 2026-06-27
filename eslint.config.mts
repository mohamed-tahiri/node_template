import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jestPlugin from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    ignores: ["dist", "build", "coverage", "public", "out"],
  },
  { files: ["src/**/*.{js,ts,jsx,tsx}", "tests/**/*.{js,ts,jsx,tsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // 1. Include the Jest recommended config object directly
  jestPlugin.configs["flat/recommended"],

  // 2. Apply your custom overrides specifically for your test files
  {
    files: ["tests/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    rules: {
      // "@typescript-eslint/no-unused-vars": "off",
    },
  },

  eslintPluginPrettierRecommended,
]);
