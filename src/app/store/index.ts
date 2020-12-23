/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-23 14:51:24
 * @LastEditTime: 2020-12-23 16:58:37
 * @LastEditors: ilove523
 * @description: ''
 */
import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState, rootReducer } from '@app/reducers';
import { logger, thunk } from '@app/middleware';

function reConfigureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(thunk, logger);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('@app/reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reConfigureStore;
