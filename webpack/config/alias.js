/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 11:54:13
 * @LastEditTime: 2020-12-18 11:24:04
 * @LastEditors: ilove523
 * @description: ''
 */
/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import { join } from 'path';

import { rootDir } from '../utils/env';

export const aliasItems = {
  '@src': join(rootDir, 'src'),
  '@images': join(rootDir, 'src/assets/images'),
  '@styles': join(rootDir, 'src/styles'),
  '@components': join(rootDir, 'src/components'),
  '@pages': join(rootDir, 'src/pages'),
  '@app': join(rootDir, 'src/app'),
  '@service': join(rootDir, 'src/service'),
  '@routers': join(rootDir, 'src/routers'),
  '@assets': join(rootDir, 'src/assets'),
  '@i18n': join(rootDir, 'src/i18n'),
};
