import React, {CSSProperties} from 'react';
import TextInputStyle from './TextInputStyle';
import {rgbToHex, hsvToRgb} from './utils';

import Message from '../../../constant/Message';

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string, objectKey: string) => void;
}

type RGBObj = {
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  onChange: (hexString: string) => void;
}

export default function TextInput({label, value, onChange}: TextInputProps) {
  return (
    <div>
      <span style={TextInputStyle.label as CSSProperties}>{label}</span>
      <span>
        <input
          type="text"
          style={TextInputStyle.input as CSSProperties}
          key={value}
          defaultValue={value}
          onBlur={(e)=>{
            onChange(e.target.value, label);
          }}
        />
      </span>
    </div>
  );
}

function RGBInput({rgb, onChange}: RGBObj) {
  const handleChangeRGBInput = (value: string, objectKey: string) => {
    try {
      const intValue = parseInt(value || '0', 10);
      if (isNaN(value as any) || intValue < 0 || intValue > 255) {
        throw new Error(Message.colorPicker.INVALID_COLOR);
      }
      rgb[objectKey.toLowerCase()] = intValue;
      onChange(rgbToHex(rgb.r, rgb.g, rgb.b));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <TextInput label="R" value={`${rgb.r}`} onChange={handleChangeRGBInput} />
      <TextInput label="G" value={`${rgb.g}`} onChange={handleChangeRGBInput} />
      <TextInput label="B" value={`${rgb.b}`} onChange={handleChangeRGBInput} />
    </div>
  );
}

type HSVObj = {
  hsv: {
    h: number;
    s: number;
    v: number;
  };
  onChange: (hexString: string) => void;
}

function HSVInput({hsv, onChange}: HSVObj) {
  const handleChangeHSVInput = (value: string, objectKey: string) => {
    try {
      const floatValue = parseFloat(value || '0');
      if (isNaN(value as any) || floatValue < 0 || floatValue > 1) {
        throw new Error(Message.colorPicker.INVALID_COLOR);
      }
      hsv[objectKey.toLowerCase()] = floatValue;
      const rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
      onChange(rgbToHex(rgb.r, rgb.g, rgb.b));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <TextInput label="H" value={`${hsv.h.toFixed(1)}`} onChange={handleChangeHSVInput} />
      <TextInput label="S" value={`${hsv.s.toFixed(1)}`} onChange={handleChangeHSVInput} />
      <TextInput label="V" value={`${hsv.v.toFixed(1)}`} onChange={handleChangeHSVInput} />
    </div>
  );
}

export {TextInput, RGBInput, HSVInput};
