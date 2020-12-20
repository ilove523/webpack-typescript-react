/**
 * @author: ilove523 <wush3w@126.com>
 * @Date: 2020-12-15 12:06:22
 * @LastEditTime: 2020-12-15 15:45:03
 * @LastEditors: ilove523
 * @description:
 */

import React, { CSSProperties } from 'react';

import StrawberryIcon from '@assets/images/strawberry.component.svg';

export interface IProperties {
  style?: CSSProperties;
  className?: string;
}

const StrawBerry = ({ style, className }: IProperties): React.ReactElement => (
  <StrawberryIcon className={className} style={style} />
);

export default StrawBerry;
