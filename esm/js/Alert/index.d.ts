import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/Alert.css';
export declare type AlertProps = ControlProps & {
    text?: string;
    type?: 'error' | 'success';
};
declare class Alert extends Control<AlertProps> {
    constructor(params?: AlertProps);
    rerender(changedAttr?: string[]): void;
    private _getClassName;
    setText(text: string): void;
    setType(type: 'error' | 'success'): void;
    disable(): void;
    enable(): void;
}
export default Alert;
