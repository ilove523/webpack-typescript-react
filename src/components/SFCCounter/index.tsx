import PropTypes from 'prop-types';
import React, { ComponentProps } from 'react';

import CounterBase from '@components/SFCCounter/CounterBase';

type Props = {
  label?: string;
  count?: number;
};

type State = {
  count: number;
};

class SFCCounter extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  render(): JSX.Element {
    // 适应 "react/destructuring-assignment": [<enabled>, 'always']
    // @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    const { count } = this.state;
    return (
      <CounterBase
        label='SFCCounter'
        count={count}
        onIncrement={() => {
          this.setState({ count: count + 1 });
        }}
      />
    );
  }
}

export default SFCCounter;
