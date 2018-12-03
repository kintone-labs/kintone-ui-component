import Item from './Item';
import Message from '../constant/Message';
import AbstractMultiSelection from './AbstractMultiSelection';
import React from 'react';

export default class CheckBox extends AbstractMultiSelection {
  _handleItemClick = (itemValue) => {
    this.setState((prevState) => {
      const value = prevState.value ? prevState.value.slice() : [];
      const length = value.length;
      let include = false;
      for (let i = 0; i < length; i++) {
        if (value[i] === itemValue) {
          include = true;
          value.splice(i, 1);
          break;
        }
      }
      if (!include) {
        value.push(itemValue);
      }
      this.props.onChange(value);
      return {'value': value};
    });
  }

  checkItemIsSelect(itemValue) {
    return !this.state.value.every(currentValue => {
      return itemValue !== currentValue;
    });
  }

  render() {
    if (this.props.isVisible === false || !this.props.items) {
      return null;
    }
    const items = this.props.items.map((item, i) => {
      const isSelected = this.state.value ? this.state.value.some(value => value === item.value) : false;
      return (
        <Item
          key={i}
          selected={isSelected}
          onChange={() => this._handleItemClick(item.value)}
          label={item.label}
          item={item}
          isDisabled={this.props.isDisabled ? this.props.isDisabled : item.isDisabled}
          type="checkbox"
          className="kuc-input-checkbox-item"
        />
      );
    });

    if (!this._hasDuplicatedItems()) {
      throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
    }

    if (!this._hasValidValue()) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }

    return (
      <div className="kuc-input-checkbox">
        {items}
      </div>
    );
  }
}