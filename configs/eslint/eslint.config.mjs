import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'

export default [
    reactPlugin.configs.flat.recommended,
    {
    plugins: {
        'react-hooks': reactHooksPlugin,
        import: importPlugin,
        '@typescript-eslint': tsPlugin,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
                tsx: true,
            },
        },
    },

    rules: {
        ...reactHooksPlugin.configs.recommended.rules,
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                tabWidth: 2,
                jsxSingleQuote: true,
                arrowParens: 'always',
                endOfLine: 'lf',
                singleAttributePerLine: true,
            },
            {
                usePrettierrc: false,
            }
        ],
        '@typescript-eslint/array-type': ['error', {
            default: 'array',
        }],

        '@typescript-eslint/default-param-last': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-for-in-array': 'error',

        '@typescript-eslint/no-misused-promises': ['error', {
            checksVoidReturn: false,
        }],

        '@typescript-eslint/naming-convention': ['error', {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        }, {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
        }, {
            selector: 'typeLike',
            format: ['PascalCase', 'UPPER_CASE'],
        }, {
            selector: 'enum',
            format: ['PascalCase', 'UPPER_CASE'],
        }],

        'arrow-body-style': 'off',
        'consistent-return': 'off',
        curly: ['error', 'all'],
        'import/export': 2,
        'import/named': 'off',
        'import/default': 'off',
        'import/namespace': 'off',

        'import/order': ['error', {
            groups: [['builtin', 'external']],
        }],

        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-mutable-exports': 'off',

        'import/no-unresolved': [2, {
            amd: true,
            commonjs: true,
        }],

        'import/prefer-default-export': 'off',
        'no-redeclare': 'off',
        'no-await-in-loop': 'off',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-nested-ternary': 'warn',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-shadow': 'off',

        'no-void': [2, {
            allowAsStatement: true,
        }],

        'react-hooks/rules-of-hooks': 'error',
        'react/display-name': 'off',

        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],

        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'warn',
        'react/require-default-props': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
            imports: 'always-multiline',
            objects: 'always-multiline',
        }],

        'no-unused-vars': ['error', {
            ignoreRestSiblings: true,
        }],

        'no-console': ['warn', {
            allow: ['warn', 'error', 'info'],
        }],

        'react/no-children-prop': ['error', {
            allowFunctions: true,
        }],

        'react/no-danger': ['error'],
        'react/no-unused-prop-types': ['error'],
    },
}];