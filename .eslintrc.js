module.exports = {
  plugins: ['eslint-plugin-tsdoc', 'simple-import-sort', 'vuejs-accessibility'],
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
    'vuejs-accessibility/alt-text': 'error',
    'vuejs-accessibility/aria-props': 'error',
    'vuejs-accessibility/aria-role': ['error', { ignoreNonDOM: true }],
    'vuejs-accessibility/aria-unsupported-elements': 'error',
    'vuejs-accessibility/form-control-has-label': 'error',
    'vuejs-accessibility/heading-has-content': 'error',
    'vuejs-accessibility/no-redundant-roles': 'error',
    'vuejs-accessibility/role-has-required-aria-props': 'error',
    'vuejs-accessibility/tabindex-no-positive': 'error',
  },
}
