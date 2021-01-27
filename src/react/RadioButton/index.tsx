import React from 'react';
import Message from '../constant/Message';
import {Item, AbstractSingleSelection} from '../index';
import '../../css/font.css';
import '../../css/RadioButton.css';

type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}
type RadioButtonProps = {
  name: string;
  value?: string;
  items?: item[];
  isVisible?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
}

const RadioButton = (props: RadioButtonProps) => {
  if (!props.name) {
    throw new Error(Message.radioBtn.MISSING_NAME);
  }
  if (props.isVisible === false) {
    return null;
  }
  if (props.items) {
    if (AbstractSingleSelection._hasDuplicatedItems(props.items)) {
      throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
    }
    if (props.value && !AbstractSingleSelection._hasValidValue(props.items, props.value) || !AbstractSingleSelection._hasValidItems(props.items)) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
  }
  const items = props.items && props.items.map((data, i) => {
    return (
      <Item
        key={i}
        selected={props.value === data.value}
        onChange={(item_prop) => AbstractSingleSelection._handleItemClick(item_prop, props.onChange)}
        item={data}
        isDisabled={props.isDisabled === true ? props.isDisabled : data.isDisabled}
        type="radio"
        name={props.name}
        className="kuc-input-radio-item"
      />
    );
  });

  return (
    <div className="kuc-input-radio">{items}</div>
  );
};

export default RadioButton;
