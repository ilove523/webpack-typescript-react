/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 14:58:08
 * @LastEditTime: 2020-12-17 15:10:41
 * @LastEditors: ilove523
 * @description: ''
 */
import { ResourceKey } from 'i18next';

import { I18N_NS as demo } from '@pages/_i18n';

/* Example:
  type Namespaces =
  | typeof module1
  | typeof module2
  | typeof module3
  | typeof module4
  | typeof module5
 */
type Namespaces = typeof demo;
export type Spec = Record<Namespaces, ResourceKey>;
