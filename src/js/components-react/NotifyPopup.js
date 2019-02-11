import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

const NotifyPopup = (props) => {
  const _handleClosePopup = () => {
    if (props.isDisabled) {
      return false;
    }
    props.onClose();
    return true;
  };

  const _getClassName = () => {
    const className = [
      'kuc-notify',
      props.isVisible === false ? '' : 'show',
      _getStyleByType().bgClass,

    ];
    return className.join(' ').trim();
  };

  const _onClick = () => {
    if (props.isDisabled) {
      return false;
    }
    props.onClick();
    return true;
  };

  const _getStyleByType = () => {
    const style = {
      bgClass: '',
      color: ''
    };
    switch (props.type) {
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

  return (
    <div>
      <div className={_getClassName()}>
        <div
          className="kuc-notify-title"
          onClick={_onClick}
        >
          {props.text}
        </div>
        <div className="kuc-close-button">
          <IconButton
            onClick={_handleClosePopup}
            type="close"
            color={_getStyleByType().color}
          />
        </div>
      </div>
    </div>
  );
};
NotifyPopup.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};
NotifyPopup.defaultProps = {
  onClick: f => f,
  onClose: f => f,
};
export default NotifyPopup;