const eslintConfig = {
  root: true,
  plugins: ['eslint-plugin-tsdoc', 'simple-import-sort'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: 0,
    '@typescript-eslint/semi': 0,
    'vue/max-attributes-per-line': 0,
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
    'no-mixed-operators': [
      2,
      {
        groups: [
          ['||', '&&'],
          ['?:', '??'],
        ],
      },
    ],
  },
}

module.exports = eslintConfig
