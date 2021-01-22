import { __assign } from "tslib";
import React, { useState, useEffect, useRef } from 'react';
import ColorPickerStyle from './ColorPickerStyle';
import Picker from './components/Picker';
import { invertColor, isHexString } from './components/utils';
import Message from '../../constant/Message';
import '../../css/font.css';
var previouseHex;
function ColorPicker(props) {
    if (props.color && !isHexString(props.color)) {
        throw new Error(Message.colorPicker.INVALID_COLOR);
    }
    var wrapperRef = useRef(null);
    var _a = useState(props.color || '#FF0000'), hexString = _a[0], setHexString = _a[1];
    var _b = useState(false), pickerDisplay = _b[0], setPickerDisplay = _b[1];
    var _c = useState(false), focus = _c[0], setFocus = _c[1];
    if (!previouseHex) {
        previouseHex = props.color || '#FF0000';
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
    useEffect(function () {
        if (props.color && props.color !== previouseHex) {
            setHexString(props.color);
            previouseHex = props.color;
        }
        var handleClickOutside = function (e) {
            if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(e.target) && pickerDisplay) {
                setFocus(false);
                setPickerDisplay(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside, true);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
    }, [props.color, pickerDisplay]);
    function getInputStyle() {
        var style = {
            backgroundColor: hexString,
            color: invertColor(hexString)
        };
        style = __assign(__assign({}, style), ColorPickerStyle.input);
        if (focus) {
            style = __assign(__assign({}, style), ColorPickerStyle.inputFocus);
        }
        return style;
    }
    var pickerProps = {
        pickerDisplay: pickerDisplay,
        hexString: hexString,
        initColor: previouseHex,
        onChange: handlePickerChange,
        onCancel: function () {
            setPickerDisplay(false);
            setFocus(false);
            setHexString(props.color || '#FF0000');
            props.onChange && props.onChange(props.color || '#FF0000');
        },
        onSubmit: function (newHexString) {
            setPickerDisplay(false);
            setFocus(false);
            setHexString(newHexString);
            props.onChange && props.onChange(newHexString);
        },
        zIndex: 2000
    };
    if (isVisible) {
        return (React.createElement("div", { ref: wrapperRef },
            React.createElement("div", null,
                React.createElement("input", __assign({}, inputProps, { key: hexString }))),
            React.createElement(Picker, __assign({}, pickerProps))));
    }
    return React.createElement("div", null);
}
export default ColorPicker;
