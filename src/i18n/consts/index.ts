/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 11:56:01
 * @LastEditTime: 2020-12-17 18:20:36
 * @LastEditors: ilove523
 * @description: ''
 * @see:
 * - https://support.google.com/webmasters/answer/189077#language-codes
 * - https://support.google.com/webmasters/answer/182192
 */
export enum Lang {
  En = 'en', // American English should be fine
  Zh = 'zh' // Simplified Chinese should be fine
};

// TODO: should we save the user lang preference to DB?
//       If that so, we might need to store it in Redux
export const DEFAULT_LANG = Lang.En;

export const AVAILABLE_LANGS = [
  {
    value: Lang.En,
    label: 'English',
  },
  {
    value: Lang.Zh,
    label: '简体中文',
  },
];

export const COOKIE_LANG = 'lang';
