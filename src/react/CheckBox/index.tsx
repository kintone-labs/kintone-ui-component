import React from 'react';
import Message from '../constant/Message';
import {Item, AbstractMultiSelection} from '../index';
import '../../css/font.css';
import '../../css/CheckBox.css';

type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}
type CheckBoxProps = {
  items?: item[];
  value?: string[];
  isVisible?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string[]) => void;
};

const CheckBox = (props: CheckBoxProps) => {
  const {_hasDuplicatedItems, _hasValidValue} = AbstractMultiSelection;
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
  if (props.isVisible === false || !props.items) {
    return null;
  }
  const items = props.items.map((data, i) => {
    const isSelected = props.value ? props.value.some(value => value === data.value) : false;
    return (
      <Item
        key={i}
        selected={isSelected}
        onChange={() => _handleItemClick(data.value)}
        // label={item.label}
        item={data}
        isDisabled={props.isDisabled === true ? props.isDisabled : data.isDisabled}
        type="checkbox"
        className="kuc-input-checkbox-item"
      />
    );
  });

  if (_hasDuplicatedItems(props.items)) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (AbstractMultiSelection._hasCheckedItemListDuplicated(props.value)) {
    throw new Error(Message.common.CHECKED_ITEM_LIST_DUPLICATE_VALUE);
  }

  if (!_hasValidValue(props.items, props.value)) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  return (
    <div className="kuc-input-checkbox">
      {items}
    </div>
  );
};

export default CheckBox;
