/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import React, { CSSProperties } from 'react';

import StrawberryIcon from '@images/strawberry.component.svg';

export interface IProperties {
  style?: CSSProperties;
  className?: string;
}

const StrawBerry = ({ style, className }: IProperties): React.ReactElement => (
  <StrawberryIcon className={className} style={style} />
);

export default StrawBerry;
