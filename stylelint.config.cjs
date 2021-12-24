module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-html',
    'stylelint-scss',
    'prettier',
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
}
