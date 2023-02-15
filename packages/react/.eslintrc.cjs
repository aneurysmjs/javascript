/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('node:path');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['import', '@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        project: [path.join(__dirname, 'tsconfig.json')],
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    indent: 'off',
    'no-restricted-exports': 'off',
    /* @typescript-eslint */
    // Eslint's `indent` rule and Prettier's indentation styles do not match
    // they're completely separate implementations
    // see @link https://github.com/eslint/eslint/issues/10930
    '@typescript-eslint/indent': 'off',
    /* import */
    'import/extensions': 'off',
    /* react-hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    /* react */
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    /**
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md#options
     * @see https://github.com/airbnb/javascript/blob/f0df3a8680479ff0b897cd98a1eab6b156899214/packages/eslint-config-airbnb-base/rules/imports.js#L72-L95
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        /**
         * @see https://github.com/import-js/eslint-plugin-import/issues/1214#issuecomment-572559124
         *
         * Use package.json from both this package folder and root.
         */
        devDependencies: true,
        packageDir: [__dirname, path.join(__dirname, '../../')],
      },
    ],

    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
