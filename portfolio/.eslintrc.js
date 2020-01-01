module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'indent': ['error',2],
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'semi': ['eror', 'always'],
    'quotes': ['error', 'single'],
    'linebreak-style': ['eror', 'unix'],
  },
};
