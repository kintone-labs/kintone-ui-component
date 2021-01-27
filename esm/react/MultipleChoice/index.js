import React from 'react';
import Message from '../constant/Message';
import { Item, AbstractMultiSelection } from '../index';
import '../../css/font.css';
import '../../css/MultipleChoice.css';
var MultipleChoice = function (props) {
    var _handleItemClick = function (itemValue) {
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
        props.onChange && props.onChange(value);
    };
    if (props.isVisible === false) {
        return null;
    }
    var items = props.items && props.items.map(function (data, i) {
        var isSelected = props.value ? props.value.some(function (value) { return value === data.value; }) : false;
        return (React.createElement(Item, { key: i, selected: isSelected, onClick: function () { return _handleItemClick(data.value); }, item: data, isDisabled: props.isDisabled === true ? props.isDisabled : data.isDisabled }));
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
    var className = [
        'kuc-multiple-list kuc-list-outer ',
        props.isDisabled ? 'kuc-multiple-list-disable' : ''
    ];
    return (React.createElement("div", { className: className.join(' ').trim() }, items));
};
export default MultipleChoice;
