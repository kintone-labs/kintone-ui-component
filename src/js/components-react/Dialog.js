import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

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
                >
                  <IconButton type="close" onClick={props.onClose} />
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
  isVisible: true,
  showCloseButton: true
};

export default Dialog;