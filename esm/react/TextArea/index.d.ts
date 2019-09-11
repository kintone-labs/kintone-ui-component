/// <reference types="react" />
import '../../css/font.css';
import '../../css/TextArea.css';
declare type TextAreaProps = {
    value: string;
    isVisible?: boolean;
    isDisabled?: boolean;
    onClick: (e: any) => void;
    onChange: (e: any) => void;
};
declare const TextArea: ({ value, isVisible, isDisabled, onChange, onClick }: TextAreaProps) => JSX.Element | null;
export default TextArea;
