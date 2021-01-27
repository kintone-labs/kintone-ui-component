import React from 'react';
import Message from '../constant/Message';
import { Item, AbstractSingleSelection } from '../index';
import '../../css/font.css';
import '../../css/RadioButton.css';
var RadioButton = function (props) {
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
    var items = props.items && props.items.map(function (data, i) {
        return (React.createElement(Item, { key: i, selected: props.value === data.value, onChange: function (item_prop) { return AbstractSingleSelection._handleItemClick(item_prop, props.onChange); }, item: data, isDisabled: props.isDisabled === true ? props.isDisabled : data.isDisabled, type: "radio", name: props.name, className: "kuc-input-radio-item" }));
    });
    return (React.createElement("div", { className: "kuc-input-radio" }, items));
};
export default RadioButton;
