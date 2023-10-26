module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        // Customize rules as per your project's needs
    },
    settings: {
        react: {
            version: 'detect', // Automatically includes the React version
        },
    },
};
