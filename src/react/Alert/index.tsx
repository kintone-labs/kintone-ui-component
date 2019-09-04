import React, {CSSProperties} from 'react';
import '../../css/font.css'
import '../../css/Alert.css';

type AlertProps = {
  style?: CSSProperties;
  className?: string; 
  text?: string;
  type?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Alert = ({style, className, text, type, isDisabled, isVisible, onClick}: AlertProps) => {
  const _getClassName = () => {
    const className = [
      'kuc-alert',
      type === 'success' ? 'bg-success' : 'bg-danger'
    ];

    return className.join(' ');
  };

  const _onClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (isDisabled) {
      return null;
    }

    onClick && onClick(e);
    return true;
  };

  if (isVisible === false) {
    return null;
  }

  return (
    <div
      style={style}
      className={`${_getClassName()} ${className}`}
      onClick={_onClick}
    >
      {text}
    </div>
  );
};

export default Alert;