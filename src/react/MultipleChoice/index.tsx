import React, {CSSProperties} from 'react';
import Message from '../constant/Message';
import {Item, AbstractMultiSelection} from '../index';
import '../../css/font.css'
import '../../css/MultipleChoice.css';

type item = {
  value: string;
  label: string;
  isDisabled: boolean;
}

type MultipleChoiceProps = {
  style?: CSSProperties;
  className?: string;
  items: item[];
  value: string[];
  isVisible: boolean;
  isDisabled: boolean;
  onChange: (value: string[]) => void;
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

  if (AbstractMultiSelection._hasDuplicatedItems(props.items)) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (!AbstractMultiSelection._hasValidValue(props.items, props.value)) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  const className = [
    'kuc-multiple-list kuc-list-outer ',
    props.isDisabled ? 'kuc-multiple-list-disable' : ''
  ];

  return (
    <div style={props.style} className={`${className.join(' ').trim()} ${props.className}`}>
      {items}
    </div>
  );
};
export default MultipleChoice;