/// <reference types="react" />
declare type TextInputProps = {
    label: string;
    value: string;
    onChange: (value: string, objectKey: string) => void;
};
declare type RGBObj = {
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    onChange: (hexString: string) => void;
};
export default function TextInput({ label, value, onChange }: TextInputProps): JSX.Element;
declare function RGBInput({ rgb, onChange }: RGBObj): JSX.Element;
declare type HSVObj = {
    hsv: {
        h: number;
        s: number;
        v: number;
    };
    onChange: (hexString: string) => void;
};
declare function HSVInput({ hsv, onChange }: HSVObj): JSX.Element;
export { TextInput, RGBInput, HSVInput };
