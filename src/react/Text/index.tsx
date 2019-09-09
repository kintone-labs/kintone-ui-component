import React from 'react';

import fontStyle from '../../style/Font'
import textStyle from '../../style/Text'
import injectStyle from '../utils/injectStyle'

// inject style, call for each style object
injectStyle(fontStyle)
injectStyle(textStyle)

type TextProps = {
  value?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onChange?: (value: string | null) => void;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Text = ({value, isDisabled = false, isVisible = true, onChange, onClick}: TextProps) => {
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  if (isVisible === false) {
    return null;
  }

  return (
    <input
      type="text"
      value={value}
      className="kuc-input-text"
      onClick={onClick}
      onChange={_onChange}
      disabled={isDisabled}
    />
  );
};

export default Text;