/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 14:50:06
 * @LastEditTime: 2020-12-17 17:56:26
 * @LastEditors: ilove523
 * @description: ''
 */
import {
  combineReducers,
  configureStore,
  Store,
} from '@reduxjs/toolkit';
import { topNav } from '@app/slices/top-nav';

const rootReducer = combineReducers({
  topNav: topNav.reducer,
});

function createStore(initialState = {}): Store {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore();
