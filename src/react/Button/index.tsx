import React, { CSSProperties } from 'react';

import fontStyle from '../../style/Font'
import buttonStyle from '../../style/Button'
import injectStyle from '../utils/injectStyle'

// inject style, call for each style object
injectStyle(fontStyle)
injectStyle(buttonStyle)

type ButtonProps = {
  style?: CSSProperties
  text?: string;
  type?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Button = ({text, type, isDisabled, isVisible, onClick, style}: ButtonProps) => {
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
    <button style={style} onClick={onClick} className={_getClassName()} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;