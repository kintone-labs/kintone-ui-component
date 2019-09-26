/// <reference types="react" />
import '../../css/font.css';
import '../../css/Dropdown.css';
declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type DropdownProps = {
    value?: string;
    items?: item[];
    isVisible?: boolean;
    isDisabled?: boolean;
    onChange?: (value: string) => void;
};
declare const Dropdown: ({ value, items, isVisible, isDisabled, onChange }: DropdownProps) => JSX.Element | null;
export default Dropdown;
