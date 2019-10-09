import Control, { ControlProps } from '../../Control';
import { RGB } from './HueSpectrum';
declare type RGBInputProps = ControlProps & {
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    onChange: (hexString: string) => void;
};
declare class RGBInput extends Control<RGBInputProps> {
    private rInput;
    private gInput;
    private bInput;
    constructor(params: RGBInputProps);
    rerender(changedAttr?: string[]): void;
    setRGB(rgb: RGB): void;
}
declare type HSVInputProps = ControlProps & {
    hsv: {
        h: number;
        s: number;
        v: number;
    };
    onChange: (hexString: string) => void;
};
declare class HSVInput extends Control<HSVInputProps> {
    private hInput;
    private sInput;
    private vInput;
    protected _props: HSVInputProps;
    constructor(params: HSVInputProps);
    rerender(changedAttr?: string[]): void;
    setHSV(hsv: {
        h: number;
        s: number;
        v: number;
    }): void;
}
export { RGBInput, HSVInput };
