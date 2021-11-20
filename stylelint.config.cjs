module.exports = {
  extends: 'stylelint-config-recommended-vue',
  files: ['*.vue'],
  customSyntax: ['postcss-html'],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['*.vue'],
      'stylelint-config-recommended-vue';
      'postcss-html';
    },
  ],
  rules: {
    'at-rule-empty-line-before': 0,
    'at-rule-no-unknown': 0,
    'scss/at-rule-no-unknown': 1,
    'selector-pseudo-element-no-unknown': [
      1,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
}
