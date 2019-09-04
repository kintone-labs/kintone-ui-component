import React, { CSSProperties } from 'react';
import '../../css/font.css'
import '../../css/Button.css';

type ButtonProps = {
  setStyles?: CSSProperties;
  setClassName?: string;
  text?: string;
  type?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Button = ({setClassName, text, type, isDisabled, isVisible, onClick, setStyles}: ButtonProps) => {
  const _getClassName = () => {
    return [
      'kuc-btn',
      type === 'submit' ? 'submit' : 'normal'
    ].join(' ').trim();
  };
  if (isVisible === false) {
    return null;
  }
  return (
    <button style={setStyles} onClick={onClick} className={`${_getClassName()} ${setClassName}`} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;