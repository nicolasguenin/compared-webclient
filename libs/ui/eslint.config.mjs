import baseConfig from '@cpd/eslint/eslint.config.mjs';

export default [
    ...baseConfig,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    }
]