module.exports = {
  extends: ['next/core-web-vitals', '@noz/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'src/app'], // Double-check this line

  },
}
