import React from 'react';
import PropTypes from 'prop-types';

const Dialog = (props) => {
  if (props.isVisible === false) {
    return null;
  }
  return (
    <div className="kuc-dialog-container">
      <div className="kuc-dialog-wrapper">
        <div className="kuc-dialog-header">
          {props.header}
          {
            (props.showCloseButton) ?
              (
                <span
                  className="kuc-dialog-close-button"
                  onClick={props.onClose}
                >
                  &times;
                </span>
              ) :
              (
                <span />
              )
          }
        </div>
        <div className="kuc-dialog-body">
          {props.content}
        </div>
        <div className="kuc-dialog-footer">
          {props.footer}
        </div>
      </div>
    </div>
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
  isVisible: false,
  showCloseButton: true
};

export default Dialog;