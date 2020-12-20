/*
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-16 16:28:53
 * @LastEditTime: 2020-12-17 09:28:33
 * @LastEditors: ilove523
 * @description: ''
 */
import gql from 'graphql-tag';

export class LoginData {
  password!: string;

  account!: string;
}

export interface ILoginManager {
  /**
   * 账号
   */
  account: string | null;

  /**
   * 用户头像
   */
  avatarUrl: string | null;

  /**
   * 昵称
   */
  nickname: string | null;

  /**
   * 更新时间
   */
  updateTime: number | null;
}

export const getLoginInfo = gql`
  query ILoginManager( $password: String, $account: String ) {
    loginManager(password: $password, account: $account) {
      account
      avatarUrl
      nickname
      updateTime
    }
  }
`;
