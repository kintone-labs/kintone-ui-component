/// <reference types="react" />
import '../../css/font.css';
import '../../css/RadioButton.css';
declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type RadioButtonProps = {
    name: string;
    value?: string;
    items?: item[];
    isVisible?: boolean;
    isDisabled?: boolean;
    onChange?: (value: string) => void;
};
declare const RadioButton: (props: RadioButtonProps) => JSX.Element | null;
export default RadioButton;
