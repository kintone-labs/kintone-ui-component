import React, { useState, CSSProperties } from "react";
import PickerStyle from "./PickerStyle";
import HueSpectrum from "./HueSpectrum";
import SaturationSpectrum from "./SaturationSpectrum";
import { RGBInput, HSVInput } from "./TextInput";
import { hexToRgb, rgbToHex, rgbToHsv } from "./utils";
import Button from "../../Button";

type RGB = {
    r: number
    g: number
    b: number
}

type PickerProps = {
    hexString: string
    pickerDisplay?: boolean
    onChange: (hexString: string) => void
    onCancel: () => void,
    onSubmit: (hexString: string) => void
}

export default function Picker(props: PickerProps) {
    const [hexString, setHexString] = useState(props.hexString);
    const [rgb, setRGB] = useState(hexToRgb(hexString))
    const [hsv, setHSV] = useState(rgbToHsv(rgb.r, rgb.g, rgb.b))

    const [saturationBackground, setSaturationBackground] = useState(rgb);

    function handleHue(newRgb: RGB) {
        setSaturationBackground(newRgb);
        setRGB(newRgb);
        setHSV(rgbToHsv(rgb.r, rgb.g, rgb.b));
    }

    function handleSaturation(newRgb: RGB) {
        props.onChange(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    }

    if (props.hexString !== hexString) {
        setHexString(props.hexString);
        setRGB(hexToRgb(props.hexString));
        setSaturationBackground(rgb)
        setHSV(rgbToHsv(rgb.r, rgb.g, rgb.b));
    }

    const saturationProps = {
        width: 200,
        height: 200,
        onSelect: handleSaturation,
        rgb: saturationBackground
    };

    return (
        <div
            style={{
                ...PickerStyle.container,
                ...{
                display: props.pickerDisplay ? "block" : "none"
                }
            } as CSSProperties}
        >
        <div style={PickerStyle.saturationContainer}>
            <SaturationSpectrum {...saturationProps} />
        </div>
        <div style={PickerStyle.hueContainer as CSSProperties}>
            <HueSpectrum width={30} height={200} onSelect={handleHue} />
        </div>
        <div style={PickerStyle.inputContainer}>
            <RGBInput rgb={rgb} onChange={props.onChange}/>
            <br />
            <HSVInput hsv={hsv} onChange={props.onChange}/>
        </div>
        <div>
            <span>
                <Button text="OK" type="submit" onClick={()=>{
                    props.onSubmit(hexString)
                }} />
            </span>
            <span>
                <Button text="Cancel" onClick={() => {
                    let oldRGB = hexToRgb(props.hexString);
                    setSaturationBackground(oldRGB)
                    setRGB(oldRGB);
                    setHSV(rgbToHsv(oldRGB.r, oldRGB.g, oldRGB.b));
                    props.onCancel()
                }} />
            </span>
        </div>
        </div>
    );
}
