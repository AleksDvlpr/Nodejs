module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb/base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'max-len': 'off',
    'no-throw-literal': 'off',
    'new-cap': 'off',
    'no-param-reassign': 'off',
  },
};
