<!--
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 17:32:21
 * @LastEditTime: 2020-12-15 17:41:34
 * @LastEditors: ilove523
 * @description: 
-->
## 使用 UglifyjsWebpackPlugin 去掉 webpack 生成文件的注释

此插件使用 [uglify-js](https://github.com/mishoo/UglifyJS2) 压缩你的 JavaScript。

+ 参考：https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin

### 安装软件包
```js
yarn add -D uglifyjs-webpack-plugin
```

### 基本用法
在 `webpack.config.js` 中增加必要的配置。
```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,

      }),
    ],
  },
};

```