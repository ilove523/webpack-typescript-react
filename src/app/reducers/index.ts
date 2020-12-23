/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-23 14:51:24
 * @LastEditTime: 2020-12-23 17:04:58
 * @LastEditors: ilove523
 * @description: ''
 */
import { combineReducers } from 'redux';
import { RootState } from './state';
import todoReducer from './todos';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  todos: todoReducer,
});
