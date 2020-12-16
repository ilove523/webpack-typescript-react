/**
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-11-27 17:34:38
 * @LastEditTime: 2020-12-16 09:35:37
 * @LastEditors: ilove523
 * @description: ''
 * @see https://webpack.docschina.org/plugins/split-chunks-plugin/
 */

import { uglifyJsPlugin } from './plugins/pluginUglifyJs';

export default {
    runtimeChunk: {
        name: 'runtime',
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'initial',
            },
            vendor: {
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                name: 'vendor',
                chunks: 'all',
            },
        },
    },
    minimize: false,
    minimizer: [ uglifyJsPlugin ],
};
