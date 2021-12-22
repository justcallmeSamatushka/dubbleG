module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'no-loops'
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-loops/no-loops": 2,
    "no-trailing-spaces": 2,
    "indent": [
      "error",
      2
    ],
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "before": false, "after": true }],
    "comma-dangle": ["error", "never"],
    "array-bracket-spacing": ["error", "always"],
    "space-before-function-paren": 2,
    "keyword-spacing": ["error", { "before": true }],
    "object-curly-spacing": ["error", "always"]
  },
};