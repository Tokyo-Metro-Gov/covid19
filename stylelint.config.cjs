module.exports = {
  files: /\.(vue|s[ac]ss)$/i,
  'extends': 'stylelint-config-recommended-vue',
  plugins: ['stylelint-scss'],
  syntax: 'scss',
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
