/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 14:58:08
 * @LastEditTime: 2020-12-18 11:09:26
 * @LastEditors: ilove523
 * @description: ''
 */
import { Resource } from 'i18next';
import { Lang } from '../consts';
import en from './en';
import zh from './zh';

// TODO: SSR and lazy load based on `req.headers.lang` or cookies, etc
const resources: Resource = {
  [Lang.En]: en,
  [Lang.Zh]: zh,
};

export default resources;
