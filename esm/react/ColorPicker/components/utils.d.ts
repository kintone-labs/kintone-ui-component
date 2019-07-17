declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
};
declare function rgbToHex(r: number, g: number, b: number): string;
declare function rgbToHsv(r_opt: number, g_opt: number, b_opt: number): {
    h: number;
    s: number;
    v: number;
};
declare function hsvToRgb(h: number, s: number, v: number): {
    r: number;
    g: number;
    b: number;
};
declare const invertColor: (hex_opt: string) => string;
declare const isHexString: (str: string) => boolean;
export { hexToRgb, rgbToHex, rgbToHsv, invertColor, hsvToRgb, isHexString };
