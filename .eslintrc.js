var eslintoptions = {
  'parseOptions': {
    'ecmaVersion': 'es6',
  },
  'env': {
    es6: true,
  },
  'plugins': [
    'tsdoc',
    'simple-import-sort',
    'vue',
    'nuxt',
  ],
  'extends': [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': [
      2,
      {
        'html': {
          'void': 'always',
        },
      },
    ],
    'prettier/prettier': [
      2,
      {
        'semi': false,
        'singleQuote': true,
      },
    ],
    'tsdoc/syntax': 2,
    'simple-import-sort/imports': 2,
    'no-restricted-imports': [
      2,
      {
        'patterns': ['./', '../'],
      },
    ],
  }],
}

module.exports.eslintoptions
