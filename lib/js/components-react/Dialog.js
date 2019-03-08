import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var Dialog = function Dialog(props) {
  if (props.isVisible === false) {
    return null;
  }
  return React.createElement(
    'div',
    { className: 'kuc-dialog-container' },
    React.createElement(
      'div',
      { className: 'kuc-dialog-wrapper' },
      React.createElement(
        'div',
        { className: 'kuc-dialog-header' },
        props.header,
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
        props.content
      ),
      React.createElement(
        'div',
        { className: 'kuc-dialog-footer' },
        props.footer
      )
    )
  );
};

Dialog.propTypes = {
  header: PropTypes.any,
  content: PropTypes.any,
  footer: PropTypes.any,
  isVisible: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func
};
Dialog.defaultProps = {
  isVisible: true,
  showCloseButton: true
};

export default Dialog;