/**
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-11-27 17:34:38
 * @LastEditTime: 2020-12-16 08:50:54
 * @LastEditors: ilove523
 * @description: ''
 * @see https://webpack.js.org/configuration/dev-server/
 */

import isWindows from 'is-windows';
import { devServerProxyConfig } from './devServierProxy';

const defaultPort = 8080;

const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
    publicPath: '/',
    port: defaultPort,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    proxy: devServerProxyConfig,
    hot: true,
    overlay: false,
    host: devServerHost,
};
