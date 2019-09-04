import React, {CSSProperties} from 'react';
import '../../css/font.css'
import '../../css/Text.css';

type TextProps = {
  setStyles?: CSSProperties;
  setClassName?: string;
  value?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onChange?: (value: string | null) => void;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Text = ({setStyles, setClassName, value, isDisabled = false, isVisible = true, onChange, onClick}: TextProps) => {
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  if (isVisible === false) {
    return null;
  }

  return (
    <input
      style={setStyles}
      type="text"
      value={value}
      className={`kuc-input-text ${setClassName}`}
      onClick={onClick}
      onChange={_onChange}
      disabled={isDisabled}
    />
  );
};

export default Text;