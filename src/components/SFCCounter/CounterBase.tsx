import React from 'react';

export type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

const CounterBase: React.FC<Props> = (props) => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => {
    onIncrement();
  };

  return (
    <div>
      <span>
        {label}: {count}
      </span>
      <button type='button' onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default CounterBase;
