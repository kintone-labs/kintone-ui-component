import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var Dialog = function Dialog(props) {
  if (props.isVisible === false) {
    return null;
  }
  var renderHeader = function renderHeader() {
    if (props.header && typeof props.header === 'string') {
      return props.header;
    }
    if (props.headerJSX) {
      return props.headerJSX;
    }
    return React.createElement('span', null);
  };
  var renderContent = function renderContent() {
    if (props.content && typeof props.content === 'string') {
      return props.content;
    }
    if (props.contentJSX) {
      return props.contentJSX;
    }
    return null;
  };
  var renderFooter = function renderFooter() {
    if (props.footer && typeof props.footer === 'string') {
      return props.footer;
    }
    if (props.footerJSX) {
      return props.footerJSX;
    }
    return null;
  };
  return React.createElement(
    'div',
    { className: 'kuc-dialog-container' },
    React.createElement(
      'div',
      { className: 'kuc-dialog-wrapper' },
      React.createElement(
        'div',
        { className: 'kuc-dialog-header' },
        renderHeader(),
        props.showCloseButton ? React.createElement(
          'span',
          {
            className: 'kuc-dialog-close-button'
          },
          React.createElement(IconButton, { type: 'close', onClick: props.onClose })
        ) : React.createElement('span', null)
      ),
      React.createElement(
        'div',
        { className: 'kuc-dialog-body' },
        renderContent()
      ),
      React.createElement(
        'div',
        { className: 'kuc-dialog-footer' },
        renderFooter()
      )
    )
  );
};

Dialog.propTypes = {
  header: PropTypes.any,
  headerJSX: PropTypes.any,
  content: PropTypes.any,
  contentJSX: PropTypes.any,
  footer: PropTypes.any,
  footerJSX: PropTypes.any,
  isVisible: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func
};
Dialog.defaultProps = {
  isVisible: true,
  showCloseButton: true
};

export default Dialog;