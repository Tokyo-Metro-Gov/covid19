module.exports = {
  extends: {
    'stylelint-config-standard': {
      configFile: '@/stylelint.config.cjs',
    },
    'stylelint-prettier': 1,
  },
  plugins: ['stylelint-scss'],
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
  },
};
