import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintImport from 'eslint-plugin-import';
import eslintPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'eslint.config.js', '.commitlintrc.cjs', 'vite.config.ts'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: eslintImport,
      prettier: eslintPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': ['off'], //允许使用any
      '@typescript-eslint/no-this-alias': [
        'error',
        {
          allowedNames: ['that'], // this可用的局部变量名称
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'off', //允许使用@ts-ignore
      '@typescript-eslint/no-non-null-assertion': 'off', //允许使用非空断言
      'no-console': [
        //提交时不允许有console.log
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-debugger': 'warn', //提交时不允许有debugger
    },
  },
);
