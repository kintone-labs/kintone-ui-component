import React, { useState, useEffect, useRef } from "react";
import ColorPickerStyle from "./ColorPickerStyle";
import Picker from "./components/Picker";
import {invertColor, isHexString} from './components/utils'

function ColorPicker() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [hexString, setHexString] = useState("#ff0000");
    const [pickerDisplay, setPickerDisplay] = useState(false);
    const [focus, setFocus] = useState(false);

    const inputProps = {
        type: "text",
        defaultValue: hexString,
        onBlur: handleHexInputChange,
        onFocus: handleHexInputFocus,
        style: getInputStyle()
    };

    function handleHexInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (isHexString(e.target.value)) {
            setHexString(e.target.value);
        }
    }

    function handlePickerChange(newHex: string) {
        setHexString(newHex);
    }

    function handleHexInputFocus() {
        setFocus(true);
        setPickerDisplay(true);
    }

    function handleClickOutside(e: Event) {
        if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(e.target as Node) && pickerDisplay) {
            setFocus(false);
            setPickerDisplay(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside, true);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside, true);
        };
    });

    function getInputStyle() {
        let style = {
            backgroundColor: hexString,
            color: invertColor(hexString)
        };

        style = { ...style, ...ColorPickerStyle.input };

        if (focus) {
            style = { ...style, ...ColorPickerStyle.inputFocus };
        }
        return style;
    }

    const pickerProps = {
        pickerDisplay: pickerDisplay,
        hexString: hexString,
        onChange: handlePickerChange
    };

    return (
        <div ref={wrapperRef}>
            <div>
                <div>
                    <input {...inputProps} key={hexString}/>
                </div>
                <Picker {...pickerProps} />
            </div>
        </div>
    );
}

export default ColorPicker;
