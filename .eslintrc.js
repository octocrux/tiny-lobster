module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    'import',
    '@typescript-eslint',
    'simple-import-sort'
  ],
  rules: {
    'no-unexpected-multiline': 'error',
    '@typescript-eslint/semi': ['warn', 'never'],
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'object-curly-spacing': ['warn', 'always'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-shadow': ['warn', { ignoreFunctionTypeParameterNameValueShadow: true }],
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'simple-import-sort/imports': 'error',
  },
  ignorePatterns: ['dist']
}
