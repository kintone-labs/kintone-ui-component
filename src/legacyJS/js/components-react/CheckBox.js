import Item from './Item';
import Message from '../constant/Message';
import AbstractMultiSelection from './AbstractMultiSelection';
import React from 'react';
import PropTypes from 'prop-types';

import '../../../css/CheckBox.css';

const CheckBox = (props) => {
  const _handleItemClick = (itemValue) => {
    const value = props.value ? props.value.slice() : [];
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
    props.onChange(value);
  };

  if (props.isVisible === false || !props.items) {
    return null;
  }
  const items = props.items.map((item, i) => {
    const isSelected = props.value ? props.value.some(value => value === item.value) : false;
    return (
      <Item
        key={i}
        selected={isSelected}
        onChange={() => _handleItemClick(item.value)}
        label={item.label}
        item={item}
        isDisabled={props.isDisabled ? props.isDisabled : item.isDisabled}
        type="checkbox"
        className="kuc-input-checkbox-item"
      />
    );
  });

  if (AbstractMultiSelection._hasDuplicatedItems(props.items)) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (!AbstractMultiSelection._hasValidValue(props.items, props.value)) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  return (
    <div className="kuc-input-checkbox">
      {items}
    </div>
  );
};
CheckBox.propTypes = {
  items: PropTypes.array,
  value: PropTypes.array,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};
CheckBox.defaultProps = {
  onChange: f => f
};
export default CheckBox;