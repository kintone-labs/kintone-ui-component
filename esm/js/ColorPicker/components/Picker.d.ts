import Control, { ControlProps } from '../../Control';
declare type PickerProps = ControlProps & {
    hexString: string;
    onChange: (hexString: string, triggerOnChange: boolean) => void;
    onAccept: (hexString: string) => void;
    onCancel: () => void;
};
declare class Picker extends Control<PickerProps> {
    private saturationSpectrum;
    private hueSpectrum;
    private saturationBackground;
    private rgbInput;
    private hsvInput;
    private okButton;
    private cancelButton;
    constructor(params: PickerProps);
    private _initHue;
    private _initSaturation;
    private _renderHue;
    private _renderSaturation;
    private _renderInput;
    private _renderButton;
    rerender(changedAttr?: string[]): void;
    setRGB(hexString: string): void;
    setHexString(hexString: string): void;
    setPickerDisplay(pickerDisplay: boolean): void;
}
export { PickerProps };
export default Picker;
