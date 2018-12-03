import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class Item extends Component {
    static propTypes = {
      item: PropTypes.object,
      isVisible: PropTypes.bool,
      isDisabled: PropTypes.bool,
      selected: PropTypes.bool,
      onClick: PropTypes.func,
      onChange: PropTypes.func,
      name: PropTypes.string,
      type: PropTypes.string,
      className: PropTypes.string
    }
    static defaultProps = {
      onClick: f => f
    };

    _onClick() {
      if (this.props.isDisabled) {
        return false;
      }
      this.props.onClick(this.props.item);
      return true;
    }

    onChange() {
      if (this.props.isDisabled) {
        return false;
      }
      this.props.onChange(this.props.item);
      return true;
    }

    generateGUID() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    render() {
      if (this.props.isVisible === false) {
        return null;
      }

      if (this.props.type === 'checkbox' || this.props.type === 'radio') {
        const id = new Date().getTime() + '-' + this.generateGUID() + '-' + this.generateGUID() + this.generateGUID();
        return (
          <span className={this.props.className}>
            <input
              name={this.props.name}
              id={id}
              disabled={this.props.isDisabled}
              type={this.props.type}
              checked={this.props.selected}
              onChange={this.onChange}
            />
            <label htmlFor={id}>{this.props.item.label}
            </label>
          </span>
        );
      }
      const className = ['kuc-list-item',
        this.props.selected ? 'kuc-list-item-selected' : '',
        this.props.isDisabled ? 'kuc-list-item-disable' : ''
      ];
      return (
        <div
          onClick={this._onClick}
          className={className.join(' ').trim()}
          disabled={this.props.isDisabled}
        >
          <span className="kuc-icon-check"><i className="fa fa-check" aria-hidden="true" /></span>
          <span className="kuc-list-item-label">{this.props.item.label}</span>
        </div>
      );
    }

}