import React from 'react';
import Message from '../constant/Message';
import {Item, AbstractMultiSelection} from '../index';
import '../../css/font.css';
import '../../css/MultipleChoice.css';

type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type MultipleChoiceProps = {
  items?: item[];
  value?: string[];
  isVisible?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string[]) => void;
};

const MultipleChoice = (props: MultipleChoiceProps) => {
  const _handleItemClick = (itemValue: string) => {
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
    props.onChange && props.onChange(value);
  };

  if (props.isVisible === false) {
    return null;
  }
  const items = props.items && props.items.map((data, i) => {
    const isSelected = props.value ? props.value.some(value => value === data.value) : false;
    return (
      <Item
        key={i}
        selected={isSelected}
        onClick={() => _handleItemClick(data.value)}
        item={data}
        isDisabled={props.isDisabled === true ? props.isDisabled : data.isDisabled}
      />
    );
  });

  if (props.items && AbstractMultiSelection._hasDuplicatedItems(props.items)) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (AbstractMultiSelection._hasCheckedItemListDuplicated(props.value)) {
    throw new Error(Message.common.CHECKED_ITEM_LIST_DUPLICATE_VALUE);
  }

  if (props.items && !AbstractMultiSelection._hasValidValue(props.items, props.value)) {
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
export default MultipleChoice;