import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  pluginReact.configs.flat.recommended,
  {
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"], // ✅ Allow JS & JSX imports
        },
        alias: {
          map: [["@", "./src"]], // ✅ Support absolute imports like @/components
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    plugins: {
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      "import/no-unresolved": "error", // 🔴 Error for missing imports
      "import/no-extraneous-dependencies": "error", // 🔴 Error for unused dependencies
      "import/no-duplicates": "warn", // 🟡 Warn if same import appears twice
      "import/order": ["warn", { "groups": ["builtin", "external", "internal"] }],
      "unused-imports/no-unused-imports": "warn", // 🟡 Warn for unused imports
    },
  },
]);
