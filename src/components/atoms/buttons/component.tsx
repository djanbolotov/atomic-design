import React, { FC } from 'react';
import styled from './style.module.scss';

const Button: FC<IButton> = ({
    submit,
    children,
    className,
    disabled,
    onClick,
}) => (
  <button disabled={disabled} onClick={onClick} type={submit ? 'submit' : 'button'} className={`${styled.button} ${className}`}>{children}</button>
);

interface IButton {
    submit?: boolean,
    disabled?: boolean,
    children: React.ReactNode,
    className?: string,
    onClick: (...args: any) => void,
}

Button.defaultProps = {
    submit: false,
    className: '',
    disabled: false,
};

export default Button;
