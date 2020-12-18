/**
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 11:54:13
 * @LastEditTime: 2020-12-17 18:20:02
 * @LastEditors: ilove523
 * @description: ''
 */

import { Button, CssBaseline } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import React, { Suspense, lazy } from 'react';

import { stylesContainer } from './app.module.less';
import { stylesHeader, stylesImage } from './app.module.scss';

const LazyStrawberryIcon = lazy(() => import('./strawberry'));
const App = (): React.ReactElement => (
  // <div className={stylesContainer}>
  //   <div className={stylesHeader}>
  //   </div>
  // </div>
  <ThemeProvider theme={useTheme()}>
    <CssBaseline />
    <Suspense fallback='loading...'>
      <Button variant='contained' href='/world-time'>
        世界时间
      </Button>
      <LazyStrawberryIcon className={stylesImage} />
    </Suspense>
  </ThemeProvider>
);

export default App;
