import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/Button.css';
declare type ButtonProps = ControlProps & {
    text?: string;
    type?: 'normal' | 'submit';
    onClick?: (e: Event) => void;
};
declare class Button extends Control<ButtonProps> {
    constructor(params?: ButtonProps);
    rerender(changedAttr?: string[]): void;
    setText(text: string): void;
    setType(type: 'normal' | 'submit'): void;
    private _getClassName;
    on(eventName: string, callback: (params?: any) => void): void;
    private _createLayout;
}
export default Button;
