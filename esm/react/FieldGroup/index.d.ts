/// <reference types="react" />
import '../../css/font.css';
import '../../css/FieldGroup.css';
declare type FieldGroupProps = {
    content?: any;
    name?: string;
    toggle?: string;
    onToggle?: (toggle: string) => void;
    isVisible?: boolean;
};
declare const FieldGroup: ({ content, name, toggle, onToggle, isVisible }: FieldGroupProps) => JSX.Element | null;
export default FieldGroup;
