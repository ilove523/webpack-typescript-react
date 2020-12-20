/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 14:50:06
 * @LastEditTime: 2020-12-17 17:33:15
 * @LastEditors: ilove523
 * @description: ''
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  type: string
};

interface Action {
  payload: {
    type: string
  }
};

const initialSliceState: State = {
  type: 'MEMBER',
};

export const topNav = createSlice({
  name: 'navBar',
  initialState: initialSliceState,
  reducers: {
    setType(state: State, action: Action) {
      // eslint-disable-next-line no-param-reassign
      state.type = action.payload.type;
    },
  },
});
