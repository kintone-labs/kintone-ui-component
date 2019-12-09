import React from 'react';
import '../../css/font.css';
import '../../css/NotifyPopup.css';
import IconButton from '../IconButton/index';

type NotifyPopupProps = {
  text?: string;
  type?: 'error' | 'success' | 'info';
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
  onClose?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const NotifyPopup = ({text, type, isVisible, onClick, onClose}: NotifyPopupProps) => {

  const _getStyleByType = () => {
    const style: {bgClass: string; color: 'gray' | 'blue' | 'red' | 'green' | 'transparent'} = {bgClass: '', color: 'red'};
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

  if (isVisible === false) {
    return null;
  }

  return (
    <div className={_getClassName()}>
      <div className="kuc-notify-title" onClick={onClick} role="none">{text}</div>
      <div className="kuc-close-button">
        <IconButton onClick={onClose} type="close" color={_getStyleByType().color} />
      </div>
    </div>
  );
};

export default NotifyPopup;