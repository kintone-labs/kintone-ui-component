import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/IconButton.css';
declare type IconBtnProps = ControlProps & {
    type?: string;
    size?: string;
    color?: string;
    shape?: string;
};
declare class IconButton extends Control<IconBtnProps> {
    private iconEl;
    private pathEl;
    private _onClick;
    constructor(params?: IconBtnProps);
    private _createLayout;
    private _getClassName;
    private _getClassSize;
    private _getIconData;
    rerender(changedAttr?: string[]): void;
    setType(type: string): void;
    setSize(size: string): void;
    setShape(shape: string): void;
    setColor(color: string): void;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default IconButton;
