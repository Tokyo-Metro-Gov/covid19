module.exports = {
  plugins: ['eslint-plugin-tsdoc', 'simple-import-sort'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier/vue',
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
    /*
     * updated from 'simple-import-sort/sort' to 'simple-import-sort/imports'
     * https://github.com/lydell/eslint-plugin-simple-import-sort#usage
     */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
