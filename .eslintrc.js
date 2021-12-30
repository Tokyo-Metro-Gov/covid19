const eslintoptions = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    '@getify/proper-ternary',
    'prettier',
    'tsdoc',
    'simple-import-sort',
    'vue',
  ],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'import/no-named-as-default': 0,
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
    '@getify/proper-ternary/nested': 1,
    '@getify/proper-ternary/parens': 1,
    '@getify/proper-ternary/where': 1,
  },
}

module.exports = eslintoptions
