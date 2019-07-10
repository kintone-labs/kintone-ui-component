import React from 'react';
import '../../css/font.css';
import '../../css/Label.css';
declare type LabelProps = {
    text?: string;
    textColor?: string;
    backgroundColor?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isVisible?: boolean;
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};
declare const Label: ({ text, textColor, backgroundColor, isRequired, isDisabled, isVisible, onClick }: LabelProps) => JSX.Element | null;
export default Label;
