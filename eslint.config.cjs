/* ESLint flat config (minimal migration from .eslintrc.cjs)
   This file is used by ESLint v9+; it mirrors the previous legacy config
   while keeping a simple shape. Adjust as needed for project rules. */
/* eslint-disable */
// Flat config that composes recommended rules from TypeScript and React Hooks
// Avoid requiring `eslint/conf` (not exported). We import the plugin configs
// that expose their recommended rules and merge them here.
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
      // Spread recommended rules from plugins (if available)
      ...(tsPlugin && tsPlugin.configs && tsPlugin.configs.recommended && tsPlugin.configs.recommended.rules ? tsPlugin.configs.recommended.rules : {}),
      ...(reactHooksPlugin && reactHooksPlugin.configs && reactHooksPlugin.configs.recommended && reactHooksPlugin.configs.recommended.rules ? reactHooksPlugin.configs.recommended.rules : {}),
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // keep any project-specific lightweight rule adjustments here if needed
    },
  },
];
