/// <reference types="react" />
declare type RGB = {
    r: number;
    g: number;
    b: number;
};
declare type HueSpectrumProps = {
    width: number;
    height: number;
    onSelect: (rgbObj: RGB) => void;
};
export default function HueSpectrum(props: HueSpectrumProps): JSX.Element;
export {};
