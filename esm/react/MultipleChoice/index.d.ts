/// <reference types="react" />
import '../../css/font.css';
import '../../css/MultipleChoice.css';
declare type item = {
    value: string;
    label?: string;
    isDisabled?: boolean;
};
declare type MultipleChoiceProps = {
    items?: item[];
    value?: string[];
    isVisible?: boolean;
    isDisabled?: boolean;
    onChange?: (value: string[]) => void;
};
declare const MultipleChoice: (props: MultipleChoiceProps) => JSX.Element | null;
export default MultipleChoice;
