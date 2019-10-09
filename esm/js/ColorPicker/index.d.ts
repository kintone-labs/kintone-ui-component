import '../polyfill';
import Control, { ControlProps } from '../Control';
declare type ColorPickerProps = ControlProps & {
    color?: string;
    onChange?: (color: string) => void;
};
declare class ColorPicker extends Control<ColorPickerProps> {
    private oldColor;
    private inputElement;
    private Picker;
    private focus;
    constructor(params?: ColorPickerProps);
    private _renderInput;
    private _renderPicker;
    rerender(changedAttr?: string[]): void;
    setColor(hexString: string): void;
    enable(): void;
    getColor(): string;
    getInputStyle(): {
        backgroundColor: string;
        color: string;
    };
    on(eventName: string, callback: (hexString: string) => void): void;
}
export default ColorPicker;
