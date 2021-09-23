module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'import/no-dynamic-require': 'off',
    'no-underscore-dangle': [2, { allow: ['foo_', '_id'] }],
    'func-names': ['error', 'never', { generators: 'as-needed' }],
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxEOF: 0,
      },
    ],
  },
};
