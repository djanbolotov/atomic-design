import React, { FC } from 'react';
import Tooltip from '../../atoms/tooltip/component';

import styled from './style.module.scss';

interface IColor {
  color: string;
  label: string;
  className?: string;
  selected?: boolean;
  onClick: (...args: any) => void;
}

const Color: FC<IColor> = ({ color, label, className, onClick, selected }) => {
  if (selected) {
    return (
      <button type="button" onClick={onClick} className={`${styled.main} ${styled.selected} ${className}`} style={{ backgroundColor: color }} />
    );
  }

  return (
    <Tooltip label={label} className={className}>
      <button type="button" onClick={onClick} className={styled.main} style={{ backgroundColor: color }} />
    </Tooltip>
  );
};

Color.defaultProps = {
  className: '',
  selected: false,
};

export default Color;
