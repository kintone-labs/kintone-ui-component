import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var NotifyPopup = function NotifyPopup(props) {
  var _handleClosePopup = function _handleClosePopup() {
    if (props.isDisabled) {
      return false;
    }
    props.onClose();
    return true;
  };

  var _getClassName = function _getClassName() {
    var className = ['kuc-notify', props.isVisible === false ? '' : 'show', _getStyleByType().bgClass];
    return className.join(' ').trim();
  };

  var _onClick = function _onClick() {
    if (props.isDisabled) {
      return false;
    }
    props.onClick();
    return true;
  };

  var _getStyleByType = function _getStyleByType() {
    var style = {
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

  return React.createElement(
    'div',
    { className: _getClassName() },
    React.createElement(
      'div',
      {
        className: 'kuc-notify-title',
        onClick: _onClick
      },
      props.text
    ),
    React.createElement(
      'div',
      { className: 'kuc-close-button' },
      React.createElement(IconButton, {
        onClick: _handleClosePopup,
        type: 'close',
        color: _getStyleByType().color
      })
    )
  );
};
NotifyPopup.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func
};
NotifyPopup.defaultProps = {
  onClick: function onClick(f) {
    return f;
  },
  onClose: function onClose(f) {
    return f;
  }
};
export default NotifyPopup;