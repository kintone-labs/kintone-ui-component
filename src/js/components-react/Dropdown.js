import Item from './Item';
import Message from '../constant/Message';
import AbstractSingleSelection from './AbstractSingleSelection';
import React from 'react';
import PropTypes from 'prop-types';

export default class Dropdown extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    items: PropTypes.array,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
  }

  state = {
    isVisibleItems: false
  }

  _showItems = () => {
    this.setState({
      isVisibleItems: true
    }, () => {
      if (document.attachEvent) {
        document.attachEvent('onClick', this._hideItems);
      } else {
        document.addEventListener('click', this._hideItems);
      }
    });
  }
  _hideItems = () => {
    this.setState({
      isVisibleItems: false
    }, () => {
      if (document.detachEvent) {
        document.detachEvent('onClick', this._hideItems);
      } else {
        document.removeEventListener('click', this._hideItems);
      }
    });
  }
  _getItemsStyle() {
    const display = this.state.isVisibleItems && !this.props.isDisabled ? {display: 'block'} : {display: 'none'};
    return display;
  }

  render() {
    if (this.props.isVisible === false) {
      return null;
    }

    if ((() => AbstractSingleSelection._hasDuplicatedItems)()) {
      throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
    }

    if (!(() => AbstractSingleSelection._hasValidValue)()) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }

    const items = this.props.items && this.props.items.map((item, i) => {
      return (
        <Item
          key={i}
          selected={this.props.value === item.value}
          onClick={(item_prop) => AbstractSingleSelection._handleItemClick(item_prop, this.props.onChange)}
          item={item}
          isDisabled={item.isDisabled}
        />
      );
    });

    let index = -1;
    this.props.items && this.props.items.forEach((item, i) => {
      if (item.value === this.props.value) {
        index = i;
      }
    });

    const className = [
      'kuc-dropdown',
      this.props.isDisabled ? 'kuc-dropdown-disable' : ''
    ];
    return (
      <div className="kuc-dropdown-container">
        <div className="kuc-dropdown-sub-container">
          <div className="kuc-dropdown-outer" onClick={this._showItems}>
            <div className={className.join(' ').trim()}>
              <div className="kuc-dropdown-selected">
                <span className="kuc-dropdown-selected-name">
                  <span>{index !== -1 && this.props.items[index].label}</span>
                  <span className="icon-arrow-down"><i className="fa fa-angle-down" aria-hidden="true" /></span>
                </span>
              </div>
            </div>
          </div>
          <div style={this._getItemsStyle()} className="kuc-list-outer">
            {items}
          </div>
        </div>
      </div>
    );
  }
}