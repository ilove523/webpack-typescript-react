/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 11:56:01
 * @LastEditTime: 2020-12-18 11:10:08
 * @LastEditors: ilove523
 * @description: ''
 * @see:
 * - https://react.i18next.com/guides/quick-start#configure-i-18-next
 * - https://react.i18next.com/latest/using-with-hooks#configure-i-18-next
 * - https://react.i18next.com/latest/i18next-instance
 */
import i18next from 'i18next';
import { EnumValues } from 'enum-values';
import { initReactI18next } from 'react-i18next';
import resources from './resources';
import { getLang } from './utils';
import { Lang, DEFAULT_LANG } from './consts';

i18next
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources,
    lng: getLang(),
    fallbackLng: DEFAULT_LANG,
    // debug: true,
    whitelist: EnumValues.getValues<Lang>(Lang),
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true
    }
    */
  });

export default i18next;
