import Item from './Item';
import Message from '../constant/Message';
import AbstractMultiSelection from './AbstractMultiSelection';
import React from 'react';
import PropTypes from 'prop-types';

var CheckBox = function CheckBox(props) {
  var _handleItemClick = function _handleItemClick(itemValue) {
    var value = props.value ? props.value.slice() : [];
    var length = value.length;
    var include = false;
    for (var i = 0; i < length; i++) {
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
  var items = props.items.map(function (item, i) {
    var isSelected = props.value ? props.value.some(function (value) {
      return value === item.value;
    }) : false;
    return React.createElement(Item, {
      key: i,
      selected: isSelected,
      onChange: function onChange() {
        return _handleItemClick(item.value);
      },
      label: item.label,
      item: item,
      isDisabled: props.isDisabled ? props.isDisabled : item.isDisabled,
      type: 'checkbox',
      className: 'kuc-input-checkbox-item'
    });
  });

  if (function () {
    return AbstractMultiSelection._hasDuplicatedItems;
  }()) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (!function () {
    return AbstractMultiSelection._hasValidValue;
  }()) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  return React.createElement(
    'div',
    { className: 'kuc-input-checkbox' },
    items
  );
};
CheckBox.propTypes = {
  items: PropTypes.array,
  value: PropTypes.array,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
CheckBox.defaultProps = {
  onChange: function onChange(f) {
    return f;
  },
  onClick: function onClick(f) {
    return f;
  }
};
export default CheckBox;