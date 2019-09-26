/// <reference types="react" />
import '../../css/font.css';
import '../../css/CheckBox.css';
declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type CheckBoxProps = {
    items?: item[];
    value?: string[];
    isVisible?: boolean;
    isDisabled?: boolean;
    onChange?: (value: string[]) => void;
};
declare const CheckBox: (props: CheckBoxProps) => JSX.Element | null;
export default CheckBox;
