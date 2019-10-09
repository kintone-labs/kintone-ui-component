import React from 'react';
import TextInputStyle from './TextInputStyle';
import { rgbToHex, hsvToRgb } from './utils';
import Message from '../../../constant/Message';
export default function TextInput(_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange;
    return (React.createElement("div", null,
        React.createElement("span", { style: TextInputStyle.label }, label),
        React.createElement("span", null,
            React.createElement("input", { type: "text", style: TextInputStyle.input, key: value, defaultValue: value, onBlur: function (e) {
                    onChange(e.target.value, label);
                } }))));
}
function RGBInput(_a) {
    var rgb = _a.rgb, onChange = _a.onChange;
    var handleChangeRGBInput = function (value, objectKey) {
        try {
            var intValue = parseInt(value || '0', 10);
            if (isNaN(value) || intValue < 0 || intValue > 255) {
                throw new Error(Message.colorPicker.INVALID_COLOR);
            }
            rgb[objectKey.toLowerCase()] = intValue;
            onChange(rgbToHex(rgb.r, rgb.g, rgb.b));
        }
        catch (error) {
            console.error(error);
        }
    };
    return (React.createElement("div", null,
        React.createElement(TextInput, { label: "R", value: "" + rgb.r, onChange: handleChangeRGBInput }),
        React.createElement(TextInput, { label: "G", value: "" + rgb.g, onChange: handleChangeRGBInput }),
        React.createElement(TextInput, { label: "B", value: "" + rgb.b, onChange: handleChangeRGBInput })));
}
function HSVInput(_a) {
    var hsv = _a.hsv, onChange = _a.onChange;
    var handleChangeHSVInput = function (value, objectKey) {
        try {
            var floatValue = parseFloat(value || '0');
            if (isNaN(value) || floatValue < 0 || floatValue > 1) {
                throw new Error(Message.colorPicker.INVALID_COLOR);
            }
            hsv[objectKey.toLowerCase()] = floatValue;
            var rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
            onChange(rgbToHex(rgb.r, rgb.g, rgb.b));
        }
        catch (error) {
            console.error(error);
        }
    };
    return (React.createElement("div", null,
        React.createElement(TextInput, { label: "H", value: "" + hsv.h.toFixed(1), onChange: handleChangeHSVInput }),
        React.createElement(TextInput, { label: "S", value: "" + hsv.s.toFixed(1), onChange: handleChangeHSVInput }),
        React.createElement(TextInput, { label: "V", value: "" + hsv.v.toFixed(1), onChange: handleChangeHSVInput })));
}
export { TextInput, RGBInput, HSVInput };
