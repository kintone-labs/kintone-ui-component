import React, {useState, useEffect, useRef} from 'react';
import ColorPickerStyle from './ColorPickerStyle';
import Picker from './components/Picker';
import {invertColor, isHexString} from './components/utils';
import Message from '../../constant/Message';

type ColorPickerProps = {
  color?: string;
  onChange?: (hexString: string) => void;
  isDisabled?: boolean;
  isVisible?: boolean
}

function ColorPicker(props: ColorPickerProps) {
  
  let defaultColor = props.color || '#ff0000'
  if (!isHexString(defaultColor)) {
    throw new Error(Message.colorPicker.INVALID_COLOR)
  }
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hexString, setHexString] = useState(defaultColor);
  const [pickerDisplay, setPickerDisplay] = useState(false);
  const [focus, setFocus] = useState(false);

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
      setHexString(defaultColor);
      props.onChange && props.onChange(defaultColor);
    },
    onSubmit: (newHexString: string) => {
      setPickerDisplay(false);
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
