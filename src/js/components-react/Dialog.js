import React from 'react';
import PropTypes from 'prop-types';

class Dialog extends React.Component {
  render() {
    if (this.props.isVisible === false) {
      return null;
    }
    return (
      <div className="kuc-dialog-container">
        <div className="kuc-dialog-wrapper">
          <div className="kuc-dialog-header">
            {this.props.header}
            {
              (this.props.showCloseButton) ?
                (
                  <span
                    className="kuc-dialog-close-button"
                    onClick={this.props.onClose}
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
            {this.props.content}
          </div>
          <div className="kuc-dialog-footer">
            {this.props.footer}
          </div>
        </div>
      </div>
    );
  }
}

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