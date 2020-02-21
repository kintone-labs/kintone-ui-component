import React from 'react';
import '../../css/font.css';
import '../../css/Text.css';
declare type TextProps = {
    value?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
    placeholder?: string;
    onChange?: (value: string | null) => void;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};
declare const Text: ({ value, isDisabled, isVisible, placeholder, onChange, onClick }: TextProps) => JSX.Element | null;
export default Text;
