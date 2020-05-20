import Control, { ControlProps } from '../../Control';
declare type SaturationSpectrumProps = ControlProps & {
    width: number;
    height: number;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    onSelect: (rgb: {
        r: number;
        g: number;
        b: number;
    }, triggerOnChange: boolean) => void;
};
declare class SaturationSpectrum extends Control<SaturationSpectrumProps> {
    private colorCanvas;
    private isMouseDown;
    constructor(params: SaturationSpectrumProps);
    rerender(changedAttr?: string[]): void;
    setRGB(rgb: {
        r: number;
        g: number;
        b: number;
    }): void;
    fillSatSpectrumCanvas(): void;
    handleMouseLeave(): void;
    triggerSelect(clientX: number, clientY: number, triggerOnChange: boolean): void;
    handleMouseMove(e: MouseEvent): void;
    handleMouseDown(): void;
    handleMouseUp(e: MouseEvent): void;
}
export { SaturationSpectrumProps };
export default SaturationSpectrum;
