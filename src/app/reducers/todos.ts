/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-23 14:51:24
 * @LastEditTime: 2020-12-23 17:59:36
 * @LastEditors: ilove523
 * @description: ''
 */
import { handleActions } from 'redux-actions';
import { TodoActions } from '@app/actions/todos';
import { TodoModel } from '@app/models';
import { RootState, TodoState } from './state';

const initialState: TodoState = [
  {
    id: 1,
    text: 'Use Redux',
    completed: false,
  },
];

const todoReducer = handleActions<TodoState, TodoModel>(
  {
    [TodoActions.Type.ADD_TODO]: (state, action) => {
      if (action.payload && action.payload.text) {
        return [
          {
            id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
            completed: false,
            text: action.payload.text,
          },
          ...state,
        ];
      }
      return state;
    },
    [TodoActions.Type.DELETE_TODO]: (state, action) => state.filter((todo) => todo.id !== (action.payload as any)),
    [TodoActions.Type.EDIT_TODO]: (state, action) => state.map((todo) => {
      if (!todo || !action || !action.payload) {
        return todo;
      }
      return (todo.id || 0) === action.payload.id ? { ...todo, text: action.payload.text } : todo;
    }),
    [TodoActions.Type.COMPLETE_TODO]: (state, action) => state.map((todo) => (todo.id === (action.payload as any)
      ? { ...todo, completed: !todo.completed } : todo)),
    [TodoActions.Type.COMPLETE_ALL]: (state, action) => state.map((todo) => ({ ...todo, completed: true })),
    [TodoActions.Type.CLEAR_COMPLETED]: (state, action) => state.filter((todo) => todo.completed === false),
  },
  initialState,
);

export default todoReducer;
