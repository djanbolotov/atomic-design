import React, { FC } from 'react';

import styled from './style.module.scss';

interface ITooltip {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const Tooltip: FC<ITooltip> = ({ label, children, className }) => (
  <div className={`${styled.wrapper} ${className}`}>
    <div className={styled.tip}>{label}</div>
    {children}
  </div>
);

Tooltip.defaultProps = {
  className: '',
};

export default Tooltip;
