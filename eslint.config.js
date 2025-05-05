// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
