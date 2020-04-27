module.exports = {
  "parser": "babel-eslint",
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'max-len': 0,
    'semi': ["error", "never"],
    "quotes": [2, "single", "avoid-escape"],
    'jsx-quotes': [2, 'prefer-single'],
    "indent": ["error", 4]
  },
};
