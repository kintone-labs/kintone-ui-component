import React from 'react';
import IconButton from '../IconButton/index';

import fontStyle from '../../style/Font'
import notifyPopupStyle from '../../style/NotifyPopup'
import injectStyle from '../../utils/injectStyle'

// inject style, call for each style object
injectStyle(fontStyle)
injectStyle(notifyPopupStyle)

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
        <IconButton onClick={_handleClosePopup} type="close" color={_getStyleByType().color} />
      </div>
    </div>
  );
};

export default NotifyPopup;