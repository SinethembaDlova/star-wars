module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        presets: ['@babel/preset-react']
      }
    },
    extends: [
      'react-app',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };