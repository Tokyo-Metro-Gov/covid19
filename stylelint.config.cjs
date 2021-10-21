module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier'],
  plugins: ['stylelint-scss'],
  modules: ['stylelint-webpack-plugin'],
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
  overrides: [
    {
      files: ['*.html', '**/*.html', '*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.sass', '**/*.sass', '*.scss', '**/*.scss'],
      customSyntax: 'postcss-sass',
    },
  ],
};
