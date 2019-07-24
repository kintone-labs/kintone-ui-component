/// <reference types="react" />
declare type SaturationSpectrumProps = {
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
    }) => void;
};
export default function SaturationSpectrum(props: SaturationSpectrumProps): JSX.Element;
export {};
