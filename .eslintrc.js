module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react'
    ],
    rules: {
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'no-floating-promises': 'off',
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-misused-promises': [
            'off'
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-floating-promises': 'off'

    },
    globals:
        {
            __IS_DEV__: true
        }
}
