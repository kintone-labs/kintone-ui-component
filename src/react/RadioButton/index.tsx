import React from 'react';
import Message from '../constant/Message';
import {Item, AbstractSingleSelection} from '../index';
import '../../css/font.css'
import '../../css/RadioButton.css';

type item = {
  value: string;
  label: string;
  isDisabled?: boolean;
}
type RadioButtonProps = {
  name?: string;
  value?: string;
  items?: item[];
  isVisible?: boolean;
  isDisabled?: boolean;
  onChange: (value: string) => void;
}

const RadioButton = (props?: RadioButtonProps) => {
  if(!props || (props && Object.keys(props).length ===0)){
    return null
  }
  if (!props.name) {
    throw new Error(Message.radioBtn.MISSING_NAME);
  }

  if (props.isVisible === false) {
    return null;
  }
  if(!props || (props && Object.keys(props).length) === 0){
    return null;
  }
  if(props.items){
    if (AbstractSingleSelection._hasDuplicatedItems(props.items)) {
      throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
    }
    if (props.value && !AbstractSingleSelection._hasValidValue(props.items, props.value)) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
  }
  const items = props.items && props.items.map((item, i) => {
    return (
      <Item
        key={i}
        selected={props.value === item.value}
        onChange={(item_prop) => AbstractSingleSelection._handleItemClick(item_prop, props.onChange)}
        item={item}
        isDisabled={props.isDisabled ? props.isDisabled : item.isDisabled}
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