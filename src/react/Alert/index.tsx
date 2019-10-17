import React from 'react';
import '../../css/font.css';
import '../../css/Alert.css';

type AlertProps = {
  text?: string;
  type?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Alert = ({text, type, isDisabled, isVisible, onClick}: AlertProps) => {
  console.log("hoho");
  
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
      role="none"
      className={_getClassName()}
      onClick={_onClick}
    >
      {text}
    </div>
  );
};

export default Alert;