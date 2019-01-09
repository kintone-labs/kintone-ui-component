import Item from './Item';
import Message from '../constant/Message';
import AbstractMultiSelection from './AbstractMultiSelection';
import React from 'react';
import PropTypes from 'prop-types';

var MultipleChoice = function MultipleChoice(props) {
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

  if (props.isVisible === false) {
    return null;
  }
  var items = props.items && props.items.map(function (item, i) {
    var isSelected = props.value ? props.value.some(function (value) {
      return value === item.value;
    }) : false;
    return React.createElement(Item, {
      key: i,
      selected: isSelected,
      onClick: function onClick() {
        return _handleItemClick(item.value);
      },
      item: item,
      isDisabled: props.isDisabled ? props.isDisabled : item.isDisabled
    });
  });

  if (AbstractMultiSelection._hasDuplicatedItems(props.items)) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (!AbstractMultiSelection._hasValidValue(props.items, props.value)) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  var className = ['kuc-multiple-list kuc-list-outer ', props.isDisabled ? 'kuc-multiple-list-disable' : ''];

  return React.createElement(
    'div',
    { className: className.join(' ').trim() },
    items
  );
};
MultipleChoice.propTypes = {
  items: PropTypes.array,
  value: PropTypes.array,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};
MultipleChoice.defaultProps = {
  onChange: function onChange(f) {
    return f;
  }
};
export default MultipleChoice;