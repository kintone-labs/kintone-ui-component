import Item from './Item';
import Message from '../constant/Message';
import AbstractSingleSelection from './AbstractSingleSelection';
import PropTypes from 'prop-types';
import React from 'react';

var RadioButton = function RadioButton(props) {
  if (!props.name) {
    throw new Error(Message.radioBtn.MISSING_NAME);
  }

  if (props.isVisible === false) {
    return null;
  }

  if (function () {
    return AbstractSingleSelection._hasDuplicatedItems;
  }()) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (!function () {
    return AbstractSingleSelection._hasValidValue;
  }()) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  var items = props.items && props.items.map(function (item, i) {
    return React.createElement(Item, {
      key: i,
      selected: props.value === item.value,
      onChange: function onChange(item_prop) {
        return AbstractSingleSelection._handleItemClick(item_prop, props.onChange);
      },
      item: item,
      isDisabled: props.isDisabled ? props.isDisabled : item.isDisabled,
      type: 'radio',
      name: props.name,
      className: 'kuc-input-radio-item'
    });
  });

  return React.createElement(
    'div',
    { className: 'kuc-input-radio' },
    items
  );
};
RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.array,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
export default RadioButton;