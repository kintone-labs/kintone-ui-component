import Item from './Item';
import Message from '../constant/Message';
import AbstractSingleSelection from './AbstractSingleSelection';
import React from 'react';

export default class RadioButton extends AbstractSingleSelection {
  constructor(props) {
    super(props);
    if (!props.name) {
      throw new Error(Message.radioBtn.MISSING_NAME);
    }
  }

  render() {
    if (this.props.isVisible === false) {
      return null;
    }

    if (!this._hasDuplicatedItems()) {
      throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
    }

    if (!this._hasValidValue()) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }

    const items = this.props.items && this.props.items.map((item, i) => {
      return (
        <Item
          key={i}
          selected={this.props.value === item.value}
          onChange={this._handleItemClick}
          item={item}
          isDisabled={this.props.isDisabled ? this.props.isDisabled : item.isDisabled}
          type="radio"
          name={this.props.name}
          className="kuc-input-radio-item"
        />
      );
    });

    return (
      <div className="kuc-input-radio">{items}</div>
    );
  }

}
