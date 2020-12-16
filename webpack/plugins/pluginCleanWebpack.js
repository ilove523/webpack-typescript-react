/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-11-27 17:34:38
 * @LastEditTime: 2020-12-15 17:46:55
 * @LastEditors: ilove523
 * @description: 
 */

import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config = {
    cleanOnceBeforeBuildPatterns: ['**/*', '!profile.json'],
};

export const cleanWebpackPlugin = new CleanWebpackPlugin(config);
