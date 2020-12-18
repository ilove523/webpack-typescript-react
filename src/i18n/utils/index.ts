/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 11:56:01
 * @LastEditTime: 2020-12-17 15:12:17
 * @LastEditors: ilove523
 * @description: ''
 */
// import i18next from 'i18next'
import Cookies from 'js-cookie';
import { EnumValues } from 'enum-values';
import { COOKIE_LANG, Lang, DEFAULT_LANG } from '@i18n/consts';

export function setLang(nextLang: Lang): void {
  const preLang = getLang();

  const ONE_YEAR = 365;
  Cookies.set(COOKIE_LANG, nextLang, { expires: ONE_YEAR });

  // i18next.changeLanguage(lang)
  // existing <Link /> would not update automatically (sucks) so that full reload is required as below
  // TODO: any better solution?
  window.location.assign(
    window.location.pathname.replace(new RegExp(`^/${preLang}`), `/${nextLang}`),
  );
}

export function getLang(): Lang {
  const currentLang = Cookies.get(COOKIE_LANG);
  if (!currentLang) {
    // TODO: detect browser lang instead of returning `DEFAULT_LANG`
    return DEFAULT_LANG;
  }
  const isWhitelistedLang = !!EnumValues.getNameFromValue<Lang>(
    Lang,
    currentLang as any,
  );
  return isWhitelistedLang ? (currentLang as Lang) : DEFAULT_LANG;
}
