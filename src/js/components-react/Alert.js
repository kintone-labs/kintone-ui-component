import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Alert extends Component {
    static propTypes = {
      type: PropTypes.string,
      text: PropTypes.string,
      isVisible: PropTypes.bool,
      isDisabled: PropTypes.bool,
      onClick: PropTypes.func,
      onChange: PropTypes.func,
    }

    static defaultProps = {
      onClick: f => f
    };

    _getClassName() {
      const className = [
        'kuc-alert',
        this.props.type === 'success' ? 'bg-success' : 'bg-danger'
      ];

      return className.join(' ');
    }

    _onClick = () => {
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
        <span
          className={this._getClassName()}
          onClick={this._onClick}
          onChange={this.props.onChange}
        >
          {this.props.text}
        </span>
      );
    }
}
