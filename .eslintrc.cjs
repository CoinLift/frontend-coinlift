module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            "^react",
            "^redux",
            "^./",
            "^../",
            "^../../",
            "^?\\w",
            "/(.*)",
            "^\\.\\/.*\\.scss$",
          ],
        ],
      },
    ],
  },
};
