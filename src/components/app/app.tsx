/**
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 11:54:13
 * @LastEditTime: 2020-12-16 11:52:27
 * @LastEditors: ilove523
 * @description:
 */

import { Button } from '@material-ui/core';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import { stylesContainer } from './app.module.less';
import { stylesHeader, stylesImage } from './app.module.scss';

const LazyStrawberryIcon = lazy(() => import('./strawberry'));
const App = (): React.ReactElement => (
  <div className={stylesContainer}>
    <div className={stylesHeader}>
      <Button variant="contained" href="/world-time">
        世界时间
      </Button>
    </div>
    <Suspense fallback="loading...">
      <LazyStrawberryIcon className={stylesImage} />
    </Suspense>
  </div>
);

export default App;
