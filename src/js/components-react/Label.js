import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class Label extends Component {
    static propTypes = {
      type: PropTypes.string,
      text: PropTypes.string,
      isRequired: PropTypes.bool,
      isVisible: PropTypes.bool,
      isDisabled: PropTypes.bool,
      onClick: PropTypes.func,
      onChange: PropTypes.func,
    }

    static defaultProps = {
      onClick: f => f
    };

    _onClick() {
      if (this.props.isDisabled) {
        return null;
      }
      this.props.onClick();
      return true;
    }

    render() {
      if (this.props.isVisible === false) {
        return null;
      }

      return (
        <div
          className="kuc-label"
          onClick={this._onClick}
          onChange={this.props.onChange}
        >
          {this.props.text}
          {this.props.isRequired && <span className="kuc-require">*</span>}
        </div>
      );
    }
}
