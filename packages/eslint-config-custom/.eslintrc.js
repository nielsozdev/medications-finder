const IMPORT_ORDER_RULES = {
  'import/newline-after-import': ['error', { count: 1 }],
  'import/order': [
    'error',
    {
      'newlines-between': 'always',
      pathGroupsExcludedImportTypes: ['react'],
      warnOnUnassignedImports: true,
      alphabetize: { order: 'asc', caseInsensitive: true },
      groups: ['builtin', 'external', 'parent', 'index', 'unknown', 'sibling', 'type'],
      pathGroups: [
        { group: 'builtin', position: 'before', pattern: 'react' },
        { group: 'builtin', position: 'after', pattern: 'react-dom' },
        { group: 'builtin', position: 'after', pattern: 'react-router-dom' },
        { group: 'builtin', position: 'before', pattern: 'next' },
        { group: 'builtin', position: 'before', pattern: 'next/**' },
        { group: 'external', position: 'after', pattern: '@mui/material/**' },
        { group: 'external', position: 'before', pattern: '@mui/material-nextjs/**' },
        { group: 'external', position: 'after', pattern: '@noz/**' },
        { group: 'external', position: 'after', pattern: '@core' },
        { group: 'external', position: 'after', pattern: '@core/**' },
        { group: 'sibling', position: 'after', pattern: '~/**' },
      ],
    },
  ],
}

const REACT_RULES = {
  'react-hooks/exhaustive-deps': 'warn', // CUSTOM Checks effect dependencies
  'react-hooks/rules-of-hooks': 'error', // CUSTOM Checks rules of Hooks
  'react/default-props-match-prop-types': 'warn',
  'react/function-component-definition': ['warn', { namedComponents: 'function-declaration' }],
  'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
  'react/jsx-equals-spacing': ['error', 'never'],
  'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  'react/jsx-first-prop-new-line': ['error', 'multiline'],
  'react/jsx-handler-names': 'off', // -> voler a activar
  'react/jsx-indent-props': ['error', 2],
  'react/jsx-indent': ['error', 2],
  'react/jsx-max-props-per-line': ['error', { maximum: 5, when: 'always' }],
  'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
  'react/jsx-no-undef': 'warn',
  'react/jsx-pascal-case': ['warn', { allowAllCaps: true, ignore: [] }],
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-uses-react': 'off',
  'react/jsx-uses-vars': 'warn',
  'react/no-children-prop': 'off',
  'react/no-deprecated': 'warn',
  'react/no-direct-mutation-state': 'error',
  'react/no-is-mounted': 'warn',
  'react/no-multi-comp': ['warn', { ignoreStateless: true }],
  'react/no-unescaped-entities': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-render-return': 'warn',
  'react/self-closing-comp': ['warn', { component: true, html: true }],
  'react/jsx-tag-spacing': [
    'error',
    {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    },
  ],
  // 'react/jsx-sort-props': [
  //   'error',
  //   {
  //     callbacksLast: true,
  //     ignoreCase: true,
  //     noSortAlphabetically: false,
  //     reservedFirst: true,
  //     shorthandFirst: true,
  //   },
  // ],
  'react/jsx-wrap-multilines': [
    'warn',
    {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      prop: 'parens-new-line',
      logical: 'parens-new-line',
      return: 'parens-new-line',
    },
  ],
}
const GENERAL_RULES = {
  // 'newline-after-var': ['error', 'always'],
  'no-console': ['warn', { allow: ['info', 'error', 'warn', 'time', 'timeEnd'] }],
  // 'no-loops/no-loops': 'off',
  // 'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true } }],
  // 'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
  // 'no-unused-vars': 'off',
  // 'no-use-before-define': ['error', { variables: false }],
  'array-bracket-newline': ['error', { multiline: true }],
  'array-bracket-spacing': ['error', 'never'],
  'arrow-parens': ['error', 'always'],
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'implicit-arrow-linebreak': ['error', 'beside'],
  'import/extensions': 'off',
  'import/no-unresolved': 'off',
  'import/no-unused-modules': 'error',
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  'multiline-ternary': ['error', 'always-multiline'],
  'newline-before-return': 'error',
  'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
  'no-return-await': 'off',
  'no-undef': 'off',
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  'no-var': 'warn',
  'object-curly-spacing': ['error', 'always'],
  'padded-blocks': ['error', { blocks: 'always' }],
  curly: ['error', 'multi-line'],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  strict: 'warn',

  'lines-around-comment': [
    'error',
    {
      afterBlockComment: false,
      afterLineComment: false,
      allowArrayEnd: true,
      allowArrayStart: true,
      allowBlockEnd: true,
      allowBlockStart: true,
      allowObjectEnd: true,
      allowObjectStart: true,
      beforeBlockComment: true,
      beforeLineComment: false,
    },
  ],
  'key-spacing': [
    'error',
    {
      multiLine: { beforeColon: false, afterColon: true },
      singleLine: { beforeColon: false, afterColon: true },
    },
  ],
  'no-use-before-define': [
    'error',
    {
      functions: true,
      classes: true,
      variables: true,
      allowNamedExports: false,
    },
  ],
}

const TYPESCRIPT_SORT_KEYS_RULES = {
  'typescript-sort-keys/interface': 'error',
  'typescript-sort-keys/string-enum': 'error',
}

const JS_TO_TS_OFF_RULES = {
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  'func-call-spacing': 'off',
  'keyword-spacing': 'off',
  'lines-between-class-members': 'off',
  'no-async-promise-executor': 'off',
  'padding-line-between-statements': 'off',
  'require-await': 'off',
  'space-before-function-paren': 'off',
  indent: ['error', 2],
}

const TS_DISABLED_RULES = {
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  '@typescript-eslint/indent': 'off',
}
const TS_RULES = {
  ...TYPESCRIPT_SORT_KEYS_RULES,
  ...JS_TO_TS_OFF_RULES,
  ...TS_DISABLED_RULES,
  // '@typescript-eslint/space-before-function-paren': ['warn'],
  // '@typescript-eslint/indent': ['error', 2, { VariableDeclarator: 2 }],
  '@typescript-eslint/comma-spacing': ['error'],
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/consistent-type-definitions': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/func-call-spacing': ['error'],
  '@typescript-eslint/keyword-spacing': ['error'],
  '@typescript-eslint/lines-between-class-members': ['error'],
  '@typescript-eslint/member-ordering': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'off',
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-misused-promises': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/type-annotation-spacing': 'error',

  '@typescript-eslint/comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      // functions: 'always-multiline',
    },
  ],
  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      allowSingleExtends: false,
    },
  ],
  '@typescript-eslint/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  '@typescript-eslint/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: ['return', 'var', 'block-like', 'multiline-block-like'],
      next: ['*'], //  ["const", "let", "var", "return"]
    },
  ],
  // indent: 'off',
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: { delimiter: 'none', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: false },
    },
  ],
}

const JS_RULES = {
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      // functions: 'always-multiline',
    },
  ],
}

const RULES = { ...IMPORT_ORDER_RULES, ...GENERAL_RULES }

module.exports = {
  // root: true, // Para asegurarse de que ESLint no busque en directorios fuera del monorepo
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    '.next/',
    '.storybook/',
    '.vscode/',
    '.idea/',
    'coverage/',
    '*.log',
    'yarn.lock',
    'package-lock.json',
    'bun.lockb',
    '**/node_modules/**',
    '**/bak/**',
    '.turbo',
  ],
  env: {
    browser: true,
    // commonjs: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: { ...RULES },
  overrides: [
    {
      files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
      extends: ['standard'],
      rules: { ...JS_RULES },
    },
    {
      files: ['**/*.ts'],
      extends: ['standard-with-typescript'],
      plugins: ['typescript-sort-keys'],
      // plugins: ['@typescript-eslint', 'typescript-sort-keys'],
      rules: { ...TS_RULES },
    },
    {
      files: ['**/*.jsx'],
      extends: ['plugin:react/recommended', 'standard'],
      plugins: ['react', 'react-hooks', 'typescript-sort-keys'],
      parserOptions: { ecmaFeatures: { jsx: true } },
      rules: { ...JS_RULES, ...REACT_RULES },
    },
    {
      files: ['**/*.tsx'],
      extends: ['plugin:react/recommended', 'standard-with-typescript'],
      plugins: ['react', 'react-hooks', 'typescript-sort-keys'],
      // plugins: ['react', 'react-hooks', '@typescript-eslint', 'typescript-sort-keys'],
      parser: '@typescript-eslint/parser',
      parserOptions: { ecmaFeatures: { jsx: true } },
      rules: { ...TS_RULES, ...REACT_RULES },
    },
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts'],
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    next: {
      rootDir: 'apps/*/',
    },
  },

}
