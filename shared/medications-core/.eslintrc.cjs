module.exports = {
  extends: ['@noz/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
};
