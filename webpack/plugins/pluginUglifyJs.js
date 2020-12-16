/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 17:44:38
 * @LastEditTime: 2020-12-16 09:50:01
 * @LastEditors: ilove523
 * @description: ''
 */

import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const config = {
  test: /\.js(\?.*)?$/i,
  uglifyOptions: {
    warnings: false,
    // parse: {},
    // compress: {},
    mangle: false, // 注意 `mangle.properties` 的默认值是 `false`。
    output: {
      beautify: true,
    },
    // toplevel: false,
    // nameCache: null,
    // ie8: false,
    // keep_fnames: false,
  },
};

export const uglifyJsPlugin = new UglifyJsPlugin(config);