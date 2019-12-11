import React from 'react';
import '../../css/font.css';
import '../../css/TextArea.css';
declare type TextAreaProps = {
    value?: string;
    isVisible?: boolean;
    isDisabled?: boolean;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
    onChange?: (value: string | null) => void;
};
declare const TextArea: ({ value, isVisible, isDisabled, onChange, onClick }: TextAreaProps) => JSX.Element | null;
export default TextArea;
