import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/Text.css';
declare type TextProps = ControlProps & {
    value?: string;
    placeholder?: string;
};
declare class Text extends Control<TextProps> {
    private _onChange;
    constructor(params?: TextProps);
    render(): HTMLElement;
    rerender(changedAttr?: string[]): void;
    on(eventName: string, callback: (params?: any) => void): void;
    setValue(value: string): void;
    getValue(): string | undefined;
    setPlaceholder(placeholder: string): void;
    getPlaceholder(): string | undefined;
}
export default Text;
