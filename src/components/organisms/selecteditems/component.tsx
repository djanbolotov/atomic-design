import React, { FC, ReactElement } from 'react';
import Select from '../../../assets/images/Vector.png';

import styled from './style.module.scss';

interface Iitem {
  children: ReactElement<any, any>,
  className?: string;
  onClick: (...args: any) => any;
}

const SelectedItem: FC<Iitem> = ({ className, children, onClick }) => (
  <div role="button" tabIndex={0} className={styled.main} onKeyDown={onClick} onClick={onClick}>
    {children}
    <img alt="#" src={Select} />
  </div>
  );

SelectedItem.defaultProps = {
  className: '',
};

export default SelectedItem;
