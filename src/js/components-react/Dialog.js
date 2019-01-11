import React from 'react';
import PropTypes from 'prop-types';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: props.isVisible
    };
  }
  render() {
    if (this.state.isVisible === false) {
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
                    onClick={()=>{
                      this.setState({isVisible: false});
                    }}
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
  showCloseButton: PropTypes.bool
};
Dialog.defaultProps = {
  isVisible: false,
  showCloseButton: true
};

export default Dialog;