import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/NotifyPopup.css';
declare type PopupProps = ControlProps & {
    text?: string;
    type?: 'error' | 'success' | 'info';
};
declare class NotifyPopup extends Control<PopupProps> {
    private textEl;
    private closeButton;
    private _onClick;
    private _onClose;
    constructor(params?: PopupProps);
    private _getStyleByType;
    private _createPopupLayout;
    on(eventName: string, callback: (params?: any) => void): void;
    private _getClassName;
    rerender(changedAttr?: string[]): void;
    setText(text: string): void;
    setType(type: 'error' | 'success' | 'info'): void;
    disable(): void;
    enable(): void;
}
export default NotifyPopup;
