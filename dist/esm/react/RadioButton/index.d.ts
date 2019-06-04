/// <reference types="react" />
import '../../css/RadioButton.css';
declare type item = {
    value: string;
    label: string;
    isDisabled: boolean;
};
declare type DropdownProps = {
    name: string;
    value: string;
    items: item[];
    isVisible: boolean;
    isDisabled: boolean;
    onChange: (value: string) => void;
};
declare const RadioButton: (props: DropdownProps) => JSX.Element | null;
export default RadioButton;
