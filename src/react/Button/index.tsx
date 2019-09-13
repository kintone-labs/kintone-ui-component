import React, { CSSProperties } from 'react';
import '../../css/font.css'
import '../../css/Button.css';

type ButtonProps = {
  style?: CSSProperties
  text?: string;
  type?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Button = (props?: ButtonProps) => {
  if(!props){
    return null;
  }
  let {text, type, isDisabled, isVisible, onClick, style}=props;
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