import React from 'react';
import '../../css/font.css';
import '../../css/NotifyPopup.css';
import IconButton from '../IconButton/index';

type NotifyPopupProps = {
  text?: string;
  type?: string;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
  onClose?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const NotifyPopup = ({text, type, isVisible, onClick, onClose}: NotifyPopupProps) => {
  const _handleClosePopup = (e: React.SyntheticEvent<EventTarget>) => {
    onClose && onClose(e);
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
      case 'info':
        style.bgClass = 'bg-info';
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

  const _onClick = (e: React.SyntheticEvent<EventTarget>) => {
    onClick && onClick(e);
    return true;
  };

  if (isVisible === false) {
    return null;
  }

  return (
    <div className={_getClassName()}>
      <div className="kuc-notify-title" onClick={_onClick} role="none">{text}</div>
      <div className="kuc-close-button">
        <IconButton onClick={_handleClosePopup} type="close" color={_getStyleByType().color} />
      </div>
    </div>
  );
};

export default NotifyPopup;