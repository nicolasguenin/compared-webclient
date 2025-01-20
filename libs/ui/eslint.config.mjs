import baseConfig from '../../configs/eslint/eslint.config.mjs';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: './tsconfig.json',
        })
      ]
    },
  },
];
