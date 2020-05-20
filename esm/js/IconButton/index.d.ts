import '../polyfill';
import Control, { ControlProps } from '../Control';
import '../../css/IconButton.css';
declare type IconBtnProps = ControlProps & {
    type?: 'insert' | 'remove' | 'close' | 'file' | 'right' | 'left';
    size?: 'normal' | 'small';
    color?: 'gray' | 'blue' | 'red' | 'green' | 'transparent';
    shape?: 'circle' | 'square';
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
    setType(type: 'insert' | 'remove' | 'close' | 'file' | 'right' | 'left'): void;
    setSize(size: 'normal' | 'small'): void;
    setShape(shape: 'circle' | 'square'): void;
    setColor(color: 'gray' | 'blue' | 'red' | 'green' | 'transparent'): void;
    on(eventName: string, callback: (params?: any) => void): void;
}
export default IconButton;
