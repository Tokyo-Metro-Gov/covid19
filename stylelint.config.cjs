module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard-scss',
    'stylelint-scss',
    'prettier',
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'scss/at-import-partial-extension': 'always',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
}
