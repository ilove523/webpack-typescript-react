/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-23 14:51:24
 * @LastEditTime: 2020-12-23 16:31:11
 * @LastEditors: ilove523
 * @description: ''
 */
import { TodoModel } from '@app/models';

export type TodoState = TodoModel[];
export interface RootState {
  todos: TodoState;
  router?: any;
}
