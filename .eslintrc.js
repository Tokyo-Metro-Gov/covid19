module.exports = {
  plugins: ['eslint-plugin-tsdoc', 'simple-import-sort'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
    'tsdoc/syntax': 'error',
    'simple-import-sort/imports': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./', '../'],
      },
    ],
  },
}
