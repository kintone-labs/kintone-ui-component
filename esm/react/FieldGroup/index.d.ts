/// <reference types="react" />
import '../../css/font.css';
import '../../css/FieldGroup.css';
declare type FieldGroupProps = {
    content?: any;
    name?: string;
    toggle?: 'collapse' | 'expand';
    onToggle?: (toggle: string) => void;
    isVisible?: boolean;
    children?: any;
};
declare const FieldGroup: ({ content, name, toggle, onToggle, isVisible, children }: FieldGroupProps) => JSX.Element | null;
export default FieldGroup;
