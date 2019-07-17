import React from 'react';
import '../../css/IconButton.css';
declare type IconButtonProps = {
    type?: string;
    size?: string;
    color?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
    shape?: string;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};
declare const IconButton: ({ type, size, color, isDisabled, isVisible, shape, onClick }: IconButtonProps) => JSX.Element | null;
export default IconButton;
