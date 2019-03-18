import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var Dialog = function Dialog(props) {
  if (props.isVisible === false) {
    return null;
  }
  var renderHeader = function renderHeader() {
    if (props.headerJSX) {
      return props.headerJSX;
    }
    if (props.header) {
      return props.header;
    }
    return React.createElement('span', null);
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
        props.contentJSX ? props.contentJSX : props.content
      ),
      React.createElement(
        'div',
        { className: 'kuc-dialog-footer' },
        props.footerJSX ? props.footerJSX : props.footer
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