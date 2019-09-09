import React, {useState, useEffect, useRef} from 'react';
import ColorPickerStyle from './ColorPickerStyle';
import Picker from './components/Picker';
import {invertColor, isHexString} from './components/utils';
import Message from '../../constant/Message';

import fontStyle from '../../style/Font'
import injectStyle from '../../utils/injectStyle'

// inject style, call for each style object
injectStyle(fontStyle)

type ColorPickerProps = {
  color?: string;
  onChange?: (hexString: string) => void;
  isDisabled?: boolean;
  isVisible?: boolean
}

let previouseHex: string

function ColorPicker(props: ColorPickerProps) {
  if (props.color && !isHexString(props.color)) {
    throw new Error(Message.colorPicker.INVALID_COLOR)
  }
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hexString, setHexString] = useState(props.color || "#FF0000");
  const [pickerDisplay, setPickerDisplay] = useState(false);
  const [focus, setFocus] = useState(false);

  if (!previouseHex) {
		previouseHex = props.color || "#FF0000"
	}

  let isVisible = true

  if (props.isVisible === false) {
    isVisible = props.isVisible
  }

  const inputProps = {
    type: 'text',
    defaultValue: hexString,
    onBlur: handleHexInputChange,
    onFocus: handleHexInputFocus,
    style: getInputStyle(),
    disabled: props.isDisabled || false
  };

  function handleHexInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isHexString(e.target.value)) {
      setHexString(e.target.value);
      /* if (props.onChange) {
          props.onChange(e.target.value)
      } */
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
    if (props.color && props.color !== previouseHex) {
      setHexString(props.color)
      previouseHex = props.color
    }
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  });

  function getInputStyle() {
    let style = {
      backgroundColor: hexString,
      color: invertColor(hexString)
    };

    style = {...style, ...ColorPickerStyle.input};

    if (focus) {
      style = {...style, ...ColorPickerStyle.inputFocus};
    }
    return style;
  }

  const pickerProps = {
    pickerDisplay: pickerDisplay,
    hexString: hexString,
    onChange: handlePickerChange,
    onCancel: () => {
      setPickerDisplay(false);
      setFocus(false);
      setHexString(props.color || "#FF0000");
      props.onChange && props.onChange(props.color || "#FF0000");
    },
    onSubmit: (newHexString: string) => {
      setPickerDisplay(false);
      setFocus(false);
      setHexString(newHexString);
      props.onChange && props.onChange(newHexString);
    },
    zIndex: 2000
  };

  if (isVisible) {
    return (
      <div ref={wrapperRef}>
        <div>
          <input {...inputProps} key={hexString} />
        </div>
        <Picker {...pickerProps} />
      </div>
    );
  }
  else {
    return <div></div>
  }
}

export default ColorPicker;
