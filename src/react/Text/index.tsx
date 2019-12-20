import React from 'react';
import '../../css/font.css';
import '../../css/Text.css';

type TextProps = {
  value?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  placeholder?: string;
  onChange?: (value: string | null) => void;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Text = ({value, isDisabled = false, isVisible = true, placeholder = '', onChange, onClick}: TextProps) => {
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
      placeholder={placeholder}
      className="kuc-input-text"
      onClick={onClick}
      onChange={_onChange}
      disabled={isDisabled}
    />
  );
};

export default Text;
