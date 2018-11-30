import {React, Component} from 'react';
import PropTypes from 'prop-types';
export default class IconButton extends Component {
    static propTypes = {
      type: PropTypes.string,
      text: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.string,
      isVisible: PropTypes.bool,
      isDisabled: PropTypes.bool,
      onClick: PropTypes.func,
      onChange: PropTypes.func,
    }

    _getClassName() {
      const colors = ['gray', 'blue', 'red', 'green'];
      const color = colors.indexOf(this.props.color) === -1 ? 'gray' : this.props.color;

      const className = [
        'kuc-icon-btn',
        this._getClassSize(),
        this.props.type === 'remove' && color === 'gray' ? 'hover-danger' : '',
        color
      ];

      return className.join(' ').trim();
    }

    _getClassType() {
      let classType = 'fa fa-plus';
      switch (this.props.type) {
        case 'insert':
          break;
        case 'remove':
          classType = 'fa fa-minus';
          break;
        case 'close':
          classType = 'fa fa-times';
          break;
      }
      return classType;
    }

    _getClassSize() {
      const className = this.props.size === 'small' ? 'small' : 'large';
      return className;
    }

    render() {
      if (this.props.isVisible === false) {
        return null;
      }
      return (
        <button
          className={this._getClassName()}
          onClick={this.props.onClick}
          disabled={this.props.isDisabled}
        >
          <i className={this._getClassType()} />
        </button>
      );
    }
}