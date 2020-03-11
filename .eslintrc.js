module.exports = {
  plugins: [
    'eslint-plugin-tsdoc'
  ],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    "prettier/vue",
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always'
      }
    }],
    'prettier/prettier': [
      'error', {
        'semi': false,
        'singleQuote': true
      }
    ],
    'tsdoc/syntax': 'error'
  }
}
