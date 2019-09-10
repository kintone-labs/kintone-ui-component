import React, { useState, CSSProperties } from "react";
import HueSpectrum from "./HueSpectrum";
import SaturationSpectrum from "./SaturationSpectrum";
import { RGBInput, HSVInput } from "./TextInput";
import { hexToRgb, rgbToHex, rgbToHsv } from "./utils";
import Button from "../../Button";

import pickerStyle from '../../../style/Picker'
import injectStyle from '../../../utils/injectStyle'

injectStyle(pickerStyle)

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
    const [fromSat, setFromSat] = useState(false);

    const [saturationBackground, setSaturationBackground] = useState(rgb);

    function handleHue(newRgb: RGB) {
        setSaturationBackground(newRgb);
        setRGB(newRgb);
        setHSV(rgbToHsv(rgb.r, rgb.g, rgb.b));
        props.onChange(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    }

    function handleSaturation(newRgb: RGB) {
        setFromSat(true);
        props.onChange(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    }

    if (props.hexString !== hexString) {
        let newRGB = hexToRgb(props.hexString)
        setHexString(props.hexString);
        setRGB(newRGB);
        !fromSat && setSaturationBackground(newRGB)
        setHSV(rgbToHsv(newRGB.r, newRGB.g, newRGB.b));
    }

    const saturationProps = {
        width: 200,
        height: 200,
        onSelect: handleSaturation,
        rgb: saturationBackground
    };

    return (
        <div
            className='kuc-color-picker-container'
            style={{display: props.pickerDisplay ? "block" : "none" } as CSSProperties}
        >
            <div className='kuc-color-picker-saturation-container'>
                <SaturationSpectrum {...saturationProps} />
            </div>
            <div className='kuc-color-picker-hue-container'>
                <HueSpectrum width={30} height={200} onSelect={handleHue} />
            </div>
            <div className='kuc-color-picker-input-container'>
                <RGBInput rgb={rgb} onChange={props.onChange}/>
                <br />
                <HSVInput hsv={hsv} onChange={props.onChange}/>
            </div>
            <div>
                <Button style={{display: 'inline-block'}} text="OK" type="submit" onClick={()=>{
                    props.onSubmit(hexString)
                }} />
                <Button style={{display: 'inline-block'}} text="Cancel" onClick={() => {
                    let oldRGB = hexToRgb(props.hexString);
                    setSaturationBackground(oldRGB)
                    setRGB(oldRGB);
                    setHSV(rgbToHsv(oldRGB.r, oldRGB.g, oldRGB.b));
                    props.onCancel()
                }} />
            </div>
        </div>
    );
}
