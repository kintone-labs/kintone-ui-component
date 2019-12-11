import React, { CSSProperties } from 'react';
import '../../css/font.css';
import '../../css/Button.css';
declare type ButtonProps = {
    style?: CSSProperties;
    text?: string;
    type?: 'normal' | 'submit';
    isDisabled?: boolean;
    isVisible?: boolean;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};
declare const Button: ({ text, type, isDisabled, isVisible, onClick, style }: ButtonProps) => JSX.Element | null;
export default Button;
