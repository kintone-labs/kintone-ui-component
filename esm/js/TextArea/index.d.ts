import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/TextArea.css';
declare type TextAreaProps = ControlProps & {
    value?: string;
    placeholder?: string;
    onClick?: (e: Event) => void;
    onChange?: (value: string | null) => void;
};
declare class TextArea extends Control<TextAreaProps> {
    private _onClick;
    private _onChange;
    private textAreaEl;
    private resizeEl;
    private textAreaWidth;
    private textAreaHeight;
    private mixTextAreaWidth;
    private mixtTextAreaHeight;
    private currentX;
    private currentY;
    private translateX;
    private translateY;
    constructor(params?: TextAreaProps);
    rerender(changedAttr?: string[]): void;
    setValue(text: string): void;
    getValue(): string | undefined;
    setPlaceholder(placeholder: string): void;
    getPlaceholder(): string | undefined;
    _onMouseDown(): void;
    private createContainerEL;
    private createTextareaEL;
    private createResizeEL;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default TextArea;
