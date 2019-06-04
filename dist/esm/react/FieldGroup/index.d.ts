/// <reference types="react" />
import '../../css/FieldGroup.css';
declare type FieldGroupProps = {
    children?: any;
    name?: string;
    toggle?: string;
    onToggle?: (toggle: string) => void;
    isVisible?: boolean;
};
declare const FieldGroup: ({ children, name, toggle, onToggle, isVisible }: FieldGroupProps) => JSX.Element | null;
export default FieldGroup;
