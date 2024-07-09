module.exports = {
  extends: ['@noz/eslint-config', 'next/core-web-vitals'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
}
