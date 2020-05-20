import React from 'react';
import { mdiCheckBold } from '@mdi/js';
import '../../css/font.css';
import '../../css/Item.css';
var Item = function (props) {
    var _onClick = function () {
        if (props.isDisabled === true) {
            return false;
        }
        props.onClick && props.onClick(props.item);
        return true;
    };
    var _onChange = function () {
        if (props.isDisabled === true) {
            return false;
        }
        props.onChange && props.onChange(props.item);
        return true;
    };
    var generateGUID = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    if (props.isVisible === false) {
        return null;
    }
    if (props.type === 'checkbox' || props.type === 'radio') {
        var id = new Date().getTime() + '-' + generateGUID() + '-' + generateGUID() + generateGUID();
        return (React.createElement("span", { className: props.className },
            React.createElement("input", { name: props.name, id: id, disabled: props.isDisabled === true, type: props.type, checked: props.selected, onChange: _onChange }),
            React.createElement("label", { htmlFor: id }, props.item.label || '')));
    }
    var className = ['kuc-list-item',
        props.selected ? 'kuc-list-item-selected' : '',
        props.isDisabled === true ? 'kuc-list-item-disable' : ''
    ];
    return (React.createElement("div", { onClick: _onClick, className: className.join(' ').trim(), role: "presentation" },
        React.createElement("span", { className: "kuc-icon-check" },
            React.createElement("svg", null,
                React.createElement("path", { d: mdiCheckBold }))),
        React.createElement("span", { className: "kuc-list-item-label" }, props.item.label || '')));
};
export default Item;
