/**
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-16 16:15:04
 * @LastEditTime: 2020-12-21 09:15:25
 * @LastEditors: ilove523
 * @description: ''
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import MainFrame from '@components/MainFrame';
import { Home, HOME_PAGE_URL } from '@pages/Home';
/**
 * Using `XXX_PAGE_URL` path constants:
 * Pros: get rid of the fragile string literals
 * Cons: TODO: summarize all the path consts into a single file to
 *             avoid circular dependency & good for split chunks + lazy load
 */
// import { Management, HOME_PAGE_URL } from '../pages'
import { Login, LOGIN_PAGE_URL } from '@pages/Login';

const AppRouter = (): React.ReactElement => {
  const { i18n } = useTranslation();
  /**
   * Benefits of `basename`:
   * 1. <Link /> component auto-prefixed
   * 2. `history.[push|replace]` auto-prefixed
   *
   * TODO: how to handle `/`? Redirect?
   */
  const basename = `/${i18n.language}`;

  return (
    <BrowserRouter basename={basename}>
      <Switch>
        <Route exact path={LOGIN_PAGE_URL} component={Login} />
        <MainFrame>
          <Route path={HOME_PAGE_URL} component={Home} />
        </MainFrame>
        <Redirect to={LOGIN_PAGE_URL} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
