import React from 'react';
import '../../css/Button.css';
declare type ButtonProps = {
    text?: string;
    type?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};
declare const Button: ({ text, type, isDisabled, isVisible, onClick }: ButtonProps) => JSX.Element | null;
export default Button;
