import {React, Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static propTypes = {
      type: PropTypes.string,
      text: PropTypes.string,
      isVisible: PropTypes.bool,
      isDisabled: PropTypes.bool,
      onClick: PropTypes.func,
      onChange: PropTypes.func,
    }

    _getClassName() {
      return [
        'kuc-btn',
        this.props.type !== 'submit' ? 'normal' : '',
        this.props.type === 'submit' ? 'submit' : ''
      ].join(' ').trim();
    }

    render() {
      if (this.props.isVisible === false) {
        return null;
      }

      return (
        <button
          className={this._getClassName()}
          onClick={this.props.onClick}
          onChange={this.props.onChange}
          disabled={this.props.isDisabled}
        >
          {this.props.text}
        </button>
      );
    }
}