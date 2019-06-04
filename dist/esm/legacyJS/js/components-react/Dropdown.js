import * as tslib_1 from "tslib";
import Item from './Item';
import Message from '../constant/Message';
import AbstractSingleSelection from './AbstractSingleSelection';
import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/Dropdown.css';
var Dropdown = /** @class */ (function (_super) {
    tslib_1.__extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isVisibleItems: false
        };
        _this._showItems = function () {
            _this.setState({
                isVisibleItems: true
            }, function () {
                if (document.attachEvent) {
                    document.attachEvent('onClick', _this._hideItems);
                }
                else {
                    document.addEventListener('click', _this._hideItems);
                }
            });
        };
        _this._hideItems = function () {
            _this.setState({
                isVisibleItems: false
            }, function () {
                if (document.detachEvent) {
                    document.detachEvent('onClick', _this._hideItems);
                }
                else {
                    document.removeEventListener('click', _this._hideItems);
                }
            });
        };
        return _this;
    }
    Dropdown.prototype._getItemsStyle = function () {
        var display = this.state.isVisibleItems && !this.props.isDisabled ? { display: 'block' } : { display: 'none' };
        return display;
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        if (this.props.isVisible === false) {
            return null;
        }
        if (AbstractSingleSelection._hasDuplicatedItems(this.props.items)) {
            throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
        }
        if (!AbstractSingleSelection._hasValidValue(this.props.items, this.props.value)) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        var items = this.props.items && this.props.items.map(function (item, i) {
            return (React.createElement(Item, { key: i, selected: _this.props.value === item.value, onClick: function (item_prop) { return AbstractSingleSelection._handleItemClick(item_prop, _this.props.onChange); }, item: item, isDisabled: item.isDisabled }));
        });
        var index = -1;
        this.props.items && this.props.items.forEach(function (item, i) {
            if (item.value === _this.props.value) {
                index = i;
            }
        });
        var className = [
            'kuc-dropdown',
            this.props.isDisabled ? 'kuc-dropdown-disable' : ''
        ];
        return (React.createElement("div", { className: "kuc-dropdown-container" },
            React.createElement("div", { className: "kuc-dropdown-sub-container" },
                React.createElement("div", { className: "kuc-dropdown-outer", onClick: this._showItems },
                    React.createElement("div", { className: className.join(' ').trim() },
                        React.createElement("div", { className: "kuc-dropdown-selected" },
                            React.createElement("span", { className: "kuc-dropdown-selected-name" },
                                React.createElement("span", null, index !== -1 && this.props.items[index].label),
                                React.createElement("span", { className: "icon-arrow-down" },
                                    React.createElement("i", { className: "fa fa-angle-down", "aria-hidden": "true" })))))),
                React.createElement("div", { style: this._getItemsStyle(), className: "kuc-list-outer" }, items))));
    };
    Dropdown.propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        items: PropTypes.array,
        isVisible: PropTypes.bool,
        isDisabled: PropTypes.bool,
        onChange: PropTypes.func,
    };
    return Dropdown;
}(React.PureComponent));
export default Dropdown;
