module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
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
  plugins: ['react', 'react'],
  rules: {
    'prettier/prettier': 2,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.js'] },
    ],
    'import/prefer-default-export': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'no-unused-vars': 1,
    'no-param-reassign': 0,
    'no-console': 0,
    'jsx-a11y/control-has-associated-label': 0,
  },
};
