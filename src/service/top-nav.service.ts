/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-17 10:30:48
 * @LastEditTime: 2020-12-18 14:02:40
 * @LastEditors: ilove523
 * @description: ''
 */
import { RootState } from '@app/store';
import { topNav } from '@app/slices/top-nav';

const { actions } = topNav;
// import { useDispatch } from 'react-redux';

export function setTopNavType(type: string) {
  return (dispatch: any) => {
    dispatch(actions.setType({ type }));
  };
};

export const selectTopNav = (state: RootState) => state.topNav;
