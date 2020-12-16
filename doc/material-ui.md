<!--
 * @Author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 14:50:51
 * @LastEditTime: 2020-12-16 12:01:29
 * @LastEditors: ilove523
 * @Description: 
-->
## 在项目中使用 Material-UI

+ 参考：https://github.com/mui-org/material-ui
+ api：https://material-ui.com/zh/api

### 安装基本包
```sh
// with yarn
yarn add @material-ui/core@next @emotion/react @emotion/styled
```
> **[Alpha channel v5](https://next.material-ui.com/)**

### 基本用法
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```