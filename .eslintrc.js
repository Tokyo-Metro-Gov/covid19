module.exports = {
  extends: [
    'stylelint-config-standard',
      {
        'configFile': 'stylelint.config.cjs',
      },
    'plugin:vue-scoped-css/recommended',
  ],
  plugins: ['stylelint-scss', 'dependencies'],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'dependencies/case-sensitive': 1,
    'dependencies/no-cycles': 1,
    'dependencies/no-unresolved': 1,
    'dependencies/require-json-ext': 1,
  },
}