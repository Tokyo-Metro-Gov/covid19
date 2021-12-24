module.exports = {
  plugins: ['eslint-plugin-tsdoc', 'simple-import-sort'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
        },
      },
    ],
    'prettier/prettier': [
      2,
      {
        semi: false,
        singleQuote: true,
      },
    ],
    'tsdoc/syntax': 2,
    'simple-import-sort/imports': 2,
    'no-restricted-imports': [
      2,
      {
        patterns: ['./', '../'],
      },
    ],
  },
}
