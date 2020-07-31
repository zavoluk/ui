module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],

    parser: '@typescript-eslint/parser',

    // Specifies the ESLint parser
    parserOptions: {
        // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        },

        ecmaVersion: 2020,
        // Allows for the parsing of modern ECMAScript features
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
        'simple-import-sort',
        'typescript-sort-keys',
        'sort-keys-fix',
        'sort-destructure-keys'
    ],

    rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'eol-last': ['error', 'always'],
        'import/first': 'off',
        'import/newline-after-import': 'off',
        'import/no-duplicates': 'off',
        'newline-before-return': 'error',
        quotes: ['error', 'single'],
        'simple-import-sort/sort': [
            'warn',
            {
                groups: [['^react$', '^styled-components$', '^\\u0000'], ['^helpers']]
            }
        ],
        'sort-destructure-keys/sort-destructure-keys': 2,
        'sort-imports': 'off',
        'sort-keys-fix/sort-keys-fix': 'error',
        'typescript-sort-keys/interface': [
            'error',
            'asc',
            { caseSensitive: true, natural: false, requiredFirst: false }
        ],
        'typescript-sort-keys/string-enum': ['error', 'asc', { caseSensitive: true }]
    }
};
