<!--
 * @Author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 14:50:51
 * @LastEditTime: 2020-12-17 11:35:39
 * @LastEditors: ilove523
 * @Description: 
-->
## 在项目中使用 Material-UI

参考：
+ manual: https://github.com/mui-org/material-ui
+ api: https://material-ui.com/zh/api

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
import { Button } from '@material-ui/core';

function App() {
  return <Button variant="contained">Hello World</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
> 更多关于 `Button`参数的介绍，请[查看官网资料](https://material-ui.com/zh/api/button/)

## material-ui/lab
```sh
yarn add @material-ui/lab@next
```