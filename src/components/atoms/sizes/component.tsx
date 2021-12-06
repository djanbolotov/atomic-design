import styled from './style.module.scss';

import React, { FC } from 'react';

interface ISize {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  onClick: (...args: any) => void;
}

const Size: FC<ISize> = ({ children, className, disabled, selected, onClick }) => <button onClick={onClick} className={`${styled.button} ${disabled ? styled.disabled : ''} ${selected ? styled.selected : ''} ${className}`} type="button">{children}</button>;

Size.defaultProps = {
  className: '',
  disabled: false,
  selected: false,
};

export default Size;
