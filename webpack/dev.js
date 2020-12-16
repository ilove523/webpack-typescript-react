/**
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-11-27 17:34:38
 * @LastEditTime: 2020-12-16 09:04:35
 * @LastEditors: ilove523
 * @description: ''
 */

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { devServerConfig } from './config';

export default {
    devtool: 'cheap-module-source-map',
    plugins: [new ReactRefreshWebpackPlugin()],
    devServer: devServerConfig,
};
