/**
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 11:54:13
 * @LastEditTime: 2020-12-15 15:19:32
 * @LastEditors: ilove523
 * @description:
 */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-scss',
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'always',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*', 'doc/*'],
};
