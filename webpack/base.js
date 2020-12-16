/**
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 11:54:13
 * @LastEditTime: 2020-12-16 09:10:48
 * @LastEditors: ilove523
 * @description: ''
 */

import path from 'path';

import { aliasItems, devServerUrl, externalItems } from './config';
import entry from './entry';
import optimizer from './optimization';
import * as plugins from './plugins';
import * as rules from './rules';
import { isDevServer, isProd } from './utils/env';
import { arrayFilterEmpty } from './utils/helpers';

export default {
    context: __dirname,
    target: ['web', 'es5'],
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: isDevServer ? devServerUrl : './',
        filename: isDevServer
            ? '[name].[fullhash].js'
            : '[name].[contenthash].js',
    },
    module: {
        rules: arrayFilterEmpty([
            rules.javascriptRule,
            rules.typescriptRule,
            rules.htmlRule,
            rules.imagesRule,
            rules.fontsRule,
            rules.cssRule,
            ...rules.lessRules,
            ...rules.sassRules,
            ...rules.svgRules,
        ]),
    },
    plugins: arrayFilterEmpty([
        plugins.htmlWebpackPlugin,
        plugins.providePlugin,
        plugins.definePlugin,
        plugins.forkTsCheckerWebpackPlugin,
        plugins.esLintPlugin,
        plugins.copyPlugin,
    ]),
    resolve: {
        alias: aliasItems,
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    optimization: optimizer,
    externals: externalItems,
};
