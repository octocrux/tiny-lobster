module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort'
  ],
  rules: {
    'no-unexpected-multiline': 'error',
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'object-curly-spacing': ['warn', 'always'],
    'comma-dangle': 'off',
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'simple-import-sort/imports': 'error',
  },

  ignorePatterns: ['dist']
}
