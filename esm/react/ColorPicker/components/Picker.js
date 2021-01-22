import { __assign } from "tslib";
import React, { useState } from 'react';
import PickerStyle from './PickerStyle';
import HueSpectrum from './HueSpectrum';
import SaturationSpectrum from './SaturationSpectrum';
import { RGBInput, HSVInput } from './TextInput';
import { hexToRgb, rgbToHex, rgbToHsv } from './utils';
import Button from '../../Button';
export default function Picker(props) {
    var _a = useState(props.hexString), hexString = _a[0], setHexString = _a[1];
    var _b = useState(hexToRgb(hexString)), rgb = _b[0], setRGB = _b[1];
    var _c = useState(rgbToHsv(rgb.r, rgb.g, rgb.b)), hsv = _c[0], setHSV = _c[1];
    var _d = useState(false), fromSat = _d[0], setFromSat = _d[1];
    var _e = useState(rgb), saturationBackground = _e[0], setSaturationBackground = _e[1];
    function handleHue(newRgb) {
        setSaturationBackground(newRgb);
        setRGB(newRgb);
        setHSV(rgbToHsv(rgb.r, rgb.g, rgb.b));
        props.onChange(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    }
    function handleSaturation(newRgb) {
        setFromSat(true);
        props.onChange(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    }
    if (props.hexString !== hexString) {
        var newRGB = hexToRgb(props.hexString);
        setHexString(props.hexString);
        setRGB(newRGB);
        !fromSat && setSaturationBackground(newRGB);
        setHSV(rgbToHsv(newRGB.r, newRGB.g, newRGB.b));
    }
    var saturationProps = {
        width: 200,
        height: 200,
        onSelect: handleSaturation,
        rgb: saturationBackground
    };
    return (React.createElement("div", { style: __assign(__assign({}, PickerStyle.container), {
            visibility: props.pickerDisplay ? 'visible' : 'hidden'
        }) },
        React.createElement("div", { style: PickerStyle.saturationContainer },
            React.createElement(SaturationSpectrum, __assign({}, saturationProps))),
        React.createElement("div", { style: PickerStyle.hueContainer },
            React.createElement(HueSpectrum, { width: 30, height: 200, onSelect: handleHue })),
        React.createElement("div", { style: PickerStyle.inputContainer },
            React.createElement(RGBInput, { rgb: rgb, onChange: function (newHexString) {
                    setSaturationBackground(hexToRgb(newHexString));
                    props.onChange(newHexString);
                } }),
            React.createElement("br", null),
            React.createElement(HSVInput, { hsv: hsv, onChange: function (newHexString) {
                    setSaturationBackground(hexToRgb(newHexString));
                    props.onChange(newHexString);
                } })),
        React.createElement("div", null,
            React.createElement(Button, { style: { display: 'inline-block' }, text: "OK", type: "submit", onClick: function () {
                    props.onSubmit(hexString);
                } }),
            React.createElement(Button, { style: { display: 'inline-block' }, text: "Cancel", onClick: function () {
                    var oldRGB = hexToRgb(props.initColor);
                    setSaturationBackground(oldRGB);
                    setRGB(oldRGB);
                    setHSV(rgbToHsv(oldRGB.r, oldRGB.g, oldRGB.b));
                    props.onCancel();
                } }))));
}
