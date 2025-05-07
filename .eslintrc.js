module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin', 
    'unused-imports',
    'import',
    'prettier', 
  ],
  'extends': [
    'plugin:@typescript-eslint/recommended', 
    'plugin:prettier/recommended', 
    'plugin:import/typescript',
  ],
  root: true,
  env: {
    'node': true,
    'jest': true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'import/no-unresolved': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
      }
    ],

    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error', // type of args
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-unused-vars': 'error',

    'eqeqeq': 'error',
    'no-console': 'error',
    'no-await-in-loop': 'error',
    'max-len': ['error', { code: 120, 'ignorePattern': '^import\\s.+\\sfrom\\s.+;$'}],
    'quotes': ['error', 'single'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-multi-spaces': 'error',

    '@typescript-eslint/naming-convention': [
      'error',
      { 'selector': 'variableLike', 'format': ['camelCase', 'UPPER_CASE', 'PascalCase'] },
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': ['camelCase', 'UPPER_CASE'],
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        'selector': 'typeLike',
        'format': ['PascalCase'],
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
      }
    ],
  },
  reportUnusedDisableDirectives: true,
}