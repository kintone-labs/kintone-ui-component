import React, { useState, useEffect, useRef } from 'react';
import Message from '../constant/Message';
import { Item, AbstractSingleSelection } from '../index';
import { mdilChevronDown } from '@mdi/light-js';
import '../../css/font.css';
import '../../css/Dropdown.css';
var Dropdown = function (_a) {
    var value = _a.value, items = _a.items, isVisible = _a.isVisible, isDisabled = _a.isDisabled, _b = _a.onChange, onChange = _b === void 0 ? function () { } : _b;
    var _c = useState(false), isVisibleItems = _c[0], setVisibleItems = _c[1];
    var ref = useRef(null);
    var _hasDuplicatedItems = AbstractSingleSelection._hasDuplicatedItems, _hasValidValue = AbstractSingleSelection._hasValidValue, _handleItemClick = AbstractSingleSelection._handleItemClick;
    var _caclListOuterPosition = function (listItemEl) {
        var position = -6;
        var currentPosition = listItemEl.offsetTop + listItemEl.offsetHeight;
        var parentEl = ref.current || document.createElement('div');
        if (currentPosition >= window.innerHeight) {
            position -= (listItemEl.offsetHeight + parentEl.offsetHeight);
        }
        return position;
    };
    var _showItems = function (e) {
        setVisibleItems(!isVisibleItems);
        var element = ref.current || document.createElement('div');
        var listItemEl = element.getElementsByClassName('kuc-list-outer')[0];
        listItemEl.setAttribute('style', "display: block;");
        listItemEl.setAttribute('style', "margin-top: " + _caclListOuterPosition(listItemEl) + "px;");
    };
    var _hideItems = function () {
        setVisibleItems(false);
    };
    var _handleClickOutside = function (e) {
        if (ref.current && !ref.current.contains(e.target)) {
            setVisibleItems(false);
        }
    };
    useEffect(function () {
        document.addEventListener('mousedown', _handleClickOutside);
        return function () { return document.removeEventListener('mousedown', _handleClickOutside); };
    });
    var _getItemsStyle = function () {
        var display = isVisibleItems && !isDisabled ? { display: 'block' } : { display: 'none' };
        return display;
    };
    if (isVisible === false) {
        return null;
    }
    if (_hasDuplicatedItems(items)) {
        throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
    }
    if (!_hasValidValue(items, value)) {
        throw new Error(Message.common.INVALID_ARGUMENT);
    }
    var listItemEl = items && items.map(function (item, i) {
        return (React.createElement(Item, { key: i, selected: value === item.value, onClick: function (item_prop) {
                _handleItemClick(item_prop, onChange);
                _hideItems();
            }, item: item, isDisabled: item.isDisabled }));
    });
    var index = -1;
    items && items.forEach(function (item, i) {
        if (item.value === value) {
            index = i;
        }
    });
    var className = [
        'kuc-dropdown',
        isDisabled ? 'kuc-dropdown-disable' : ''
    ];
    return (React.createElement("div", { className: "kuc-dropdown-container", ref: ref },
        React.createElement("div", { className: "kuc-dropdown-sub-container" },
            React.createElement("div", { className: "kuc-dropdown-outer", onClick: _showItems, role: "presentation" },
                React.createElement("div", { className: className.join(' ').trim() },
                    React.createElement("div", { className: "kuc-dropdown-selected" },
                        React.createElement("span", { className: "kuc-dropdown-selected-name" },
                            React.createElement("span", { className: "kuc-dropdown-selected-label" }, index !== -1 && items && items[index].label),
                            React.createElement("span", { className: "icon-arrow-down" },
                                React.createElement("svg", null,
                                    React.createElement("path", { d: mdilChevronDown }))))))),
            React.createElement("div", { style: _getItemsStyle(), className: "kuc-list-outer" }, listItemEl))));
};
export default Dropdown;
