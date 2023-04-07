/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  "overrides": [
    {
      "extends": [
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": "tsconfig.json"
      }
    }
  ],
  "ignorePatterns": ["*.config.js"],
  "plugins": ["@typescript-eslint"],
  "rules": {
    "semi": "error",
    "eol-last": "error",
    "no-trailing-spaces": "error",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/order": [
      "error",
      { "newlines-between": "always", "alphabetize": { "order": "asc" } }
    ],
    "sort-imports": [
      "error",
      { "ignoreDeclarationSort": true, "ignoreCase": true }
    ],
    "functional/no-return-void": "off",
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        "checksVoidReturn": {
          "attributes": false
        }
      }
    ]
  }
};
