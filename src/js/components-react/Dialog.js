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
          {
            (props.headerJSX) ? (props.headerJSX) : (props.header)
          }
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
          {
            (props.contentJSX) ? (props.contentJSX) : (props.content)
          }
        </div>
        <div className="kuc-dialog-footer">
          {
            (props.footerJSX) ? (props.footerJSX) : (props.footer)
          }
        </div>
      </div>
    </div>
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