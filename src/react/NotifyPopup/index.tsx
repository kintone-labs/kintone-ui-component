import React from 'react';
import '../../css/font.css'
import '../../css/NotifyPopup.css';
import IconButton from '../IconButton/index';

type NotifyPopupProps = {
  text?: string;
  type?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}

const NotifyPopup = ({text, type, isDisabled, isVisible, onClick, onClose}: NotifyPopupProps) => {
  const _handleClosePopup = () => {
    if (isDisabled) {
      return false;
    }
    onClose && onClose();
    return true;
  };

  const _getStyleByType = () => {
    const style = {
      bgClass: '',
      color: ''
    };
    switch (type) {
      case 'success':
        style.bgClass = 'bg-success';
        style.color = 'green';
        break;
      case 'infor':
        style.bgClass = 'bg-infor';
        style.color = 'blue';
        break;
      default:
        style.bgClass = 'bg-danger';
        style.color = 'red';
    }
    return style;
  };

  const _getClassName = () => {
    const className = [
      'kuc-notify',
      _getStyleByType().bgClass
    ];
    return className.join(' ').trim();
  };

  const _onClick = () => {
    if (isDisabled) {
      return false;
    }
    onClick && onClick();
    return true;
  };

  if (isVisible === false) {
    return null; 
  }

  return (
    <div className={_getClassName()}>
      <div className="kuc-notify-title" onClick={_onClick} >{text}</div>
      <div className="kuc-close-button">
        <IconButton onClick={_handleClosePopup} isDisabled={isDisabled} type="close" color={_getStyleByType().color} />
      </div>
    </div>
  );
};

export default NotifyPopup;