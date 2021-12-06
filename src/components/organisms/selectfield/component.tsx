import React, { FC, ReactElement } from 'react';

import styled from './style.module.scss';

interface Ifield {
  children: any,
  display: boolean
}

const SelectField: FC<Ifield> = ({ children, display }) => (
  <div className={display ? styled.container : styled.show}>
    {children}
  </div>
);

export default SelectField;
