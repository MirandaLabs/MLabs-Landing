
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactRefreshPlugin = require('eslint-plugin-react-refresh');

module.exports = [
  {
    ignores: ['dist', 'node_modules', 'eslint.config.cjs'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {},
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    linterOptions: { reportUnusedDisableDirectives: true },
    rules: {

      ...(tsPlugin && tsPlugin.configs && tsPlugin.configs.recommended && tsPlugin.configs.recommended.rules ? tsPlugin.configs.recommended.rules : {}),
      ...(reactHooksPlugin && reactHooksPlugin.configs && reactHooksPlugin.configs.recommended && reactHooksPlugin.configs.recommended.rules ? reactHooksPlugin.configs.recommended.rules : {}),
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];
