import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/Alert.css';
declare type AlertProps = ControlProps & {
    text?: string;
    type?: string;
};
declare class Alert extends Control<AlertProps> {
    constructor(params?: AlertProps);
    rerender(changedAttr?: string[]): void;
    private _getClassName;
    setText(text: string): void;
    setType(type: string): void;
    disable(): void;
    enable(): void;
}
export default Alert;
