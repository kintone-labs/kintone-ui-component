import Item from './Item';
import Message from '../constant/Message';
import AbstractMultiSelection from './AbstractMultiSelection';
import React from 'react';
import PropTypes from 'prop-types';

const MultipleChoice = (props) => {
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

  if (props.isVisible === false) {
    return null;
  }
  const items = props.items && props.items.map((item, i) => {
    const isSelected = props.value ? props.value.some(value => value === item.value) : false;
    return (
      <Item
        key={i}
        selected={isSelected}
        onClick={() => _handleItemClick(item.value)}
        item={item}
        isDisabled={props.isDisabled ? props.isDisabled : item.isDisabled}
      />
    );
  });

  if (!(() => AbstractMultiSelection._hasDuplicatedItems)()) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (!(() => AbstractMultiSelection._hasValidValue)()) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  const className = [
    'kuc-multiple-list kuc-list-outer ',
    props.isDisabled ? 'kuc-multiple-list-disable' : ''
  ];

  return (
    <div className={className.join(' ').trim()}>
      {items}
    </div>
  );
};
MultipleChoice.propTypes = {
  items: PropTypes.array,
  value: PropTypes.array,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};
MultipleChoice.defaultProps = {
  onChange: f => f,
  onClick: f => f
};
export default MultipleChoice;