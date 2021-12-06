import React, { FC } from 'react';
import Button from '../../atoms/buttons/component';

import styled from './style.module.scss';

interface ICounter {
  disabled?: boolean;
  count: number;
  Function1: (...args: any) => void;
  Function2: (...args: any) => void;
}

const Counter: FC<ICounter> = ({ disabled, count, Function1, Function2 }) => (
  <div className={styled.main}>
    <Button disabled={disabled} onClick={Function1} className="ml-4-vw mr-4-vw">-</Button>
    {count}
    <Button onClick={Function2} className="ml-4-vw mr-4-vw">+</Button>
  </div>
);

Counter.defaultProps = {
  disabled: false,
};

export default Counter;
