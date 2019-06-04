import * as tslib_1 from "tslib";
import React, { useState, useEffect, useRef } from 'react';
import ColorPickerStyle from './ColorPickerStyle';
import Picker from './components/Picker';
import { invertColor, isHexString } from './components/utils';
import Message from '../../constant/Message';
var previouseHex;
function ColorPicker(props) {
    if (props.color && !isHexString(props.color)) {
        throw new Error(Message.colorPicker.INVALID_COLOR);
    }
    var wrapperRef = useRef(null);
    var _a = useState(props.color || "#FF0000"), hexString = _a[0], setHexString = _a[1];
    var _b = useState(false), pickerDisplay = _b[0], setPickerDisplay = _b[1];
    var _c = useState(false), focus = _c[0], setFocus = _c[1];
    if (!previouseHex) {
        previouseHex = props.color || "#FF0000";
    }
    var isVisible = true;
    if (props.isVisible === false) {
        isVisible = props.isVisible;
    }
    var inputProps = {
        type: 'text',
        defaultValue: hexString,
        onBlur: handleHexInputChange,
        onFocus: handleHexInputFocus,
        style: getInputStyle(),
        disabled: props.isDisabled || false
    };
    function handleHexInputChange(e) {
        if (isHexString(e.target.value)) {
            setHexString(e.target.value);
            /* if (props.onChange) {
                props.onChange(e.target.value)
            } */
        }
    }
    function handlePickerChange(newHex) {
        setHexString(newHex);
    }
    function handleHexInputFocus() {
        setFocus(true);
        setPickerDisplay(true);
    }
    function handleClickOutside(e) {
        if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(e.target) && pickerDisplay) {
            setFocus(false);
            setPickerDisplay(false);
        }
    }
    useEffect(function () {
        if (props.color && props.color !== previouseHex) {
            setHexString(props.color);
            previouseHex = props.color;
        }
        document.addEventListener('mousedown', handleClickOutside, true);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
    });
    function getInputStyle() {
        var style = {
            backgroundColor: hexString,
            color: invertColor(hexString)
        };
        style = tslib_1.__assign({}, style, ColorPickerStyle.input);
        if (focus) {
            style = tslib_1.__assign({}, style, ColorPickerStyle.inputFocus);
        }
        return style;
    }
    var pickerProps = {
        pickerDisplay: pickerDisplay,
        hexString: hexString,
        onChange: handlePickerChange,
        onCancel: function () {
            setPickerDisplay(false);
            setHexString(props.color || "#FF0000");
            props.onChange && props.onChange(props.color || "#FF0000");
        },
        onSubmit: function (newHexString) {
            setPickerDisplay(false);
            setHexString(newHexString);
            props.onChange && props.onChange(newHexString);
        },
        zIndex: 2000
    };
    if (isVisible) {
        return (React.createElement("div", { ref: wrapperRef },
            React.createElement("div", null,
                React.createElement("input", tslib_1.__assign({}, inputProps, { key: hexString }))),
            React.createElement(Picker, tslib_1.__assign({}, pickerProps))));
    }
    else {
        return React.createElement("div", null);
    }
}
export default ColorPicker;
