// eslint.config.cjs
const { FlatCompat } = require('@eslint/eslintrc');
const path = require('path');

const compat = new FlatCompat({
  baseDirectory: path.resolve(__dirname)
});

module.exports = [
  ...compat.extends('eslint-config-react-app')
];