module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2020: true,
  },
  parser: "babel-eslint",
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "script",
  },
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": 0,
    "no-console": 0,
  },
};
