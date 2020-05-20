import React from 'react';
import '../../css/font.css';
import '../../css/Tabs.css';
import Message from '../../constant/Message';
var Tabs = function (_a) {
    var items = _a.items, value = _a.value, onClickTabItem = _a.onClickTabItem;
    var selectedTabs = value || 0;
    var _onClickTabItem = function (tabIndex) {
        onClickTabItem && onClickTabItem(tabIndex);
    };
    if (value) {
        if (typeof value !== 'number') {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (!items || value > items.length - 1 || value < 0) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
    }
    var tabNames = (React.createElement("ul", { className: "kuc-tabs-tab-list" }, items &&
        items.map(function (item, tabIndex) {
            if (!item.tabName) {
                throw new Error(Message.tabs.MISSING_TAB_NAME.replace('{{index}}', tabIndex.toString()));
            }
            var className = 'kuc-tabs-container';
            if (selectedTabs === tabIndex) {
                className += ' kuc-tabs-container-selection';
                if (item.isDisabled) {
                    throw new Error(Message.tabs.INVALID_ACTION);
                }
            }
            else if (item.isDisabled) {
                className += ' kuc-tabs-disabled';
                return (React.createElement("li", { className: className, key: tabIndex }, item.tabName));
            }
            return (React.createElement("li", { role: "none", className: className, key: tabIndex, onClick: function () { return _onClickTabItem(tabIndex); }, onKeyUp: function () { return _onClickTabItem(tabIndex); } }, item.tabName));
        })));
    var tabContents = items &&
        items.map(function (item, tabIndex) {
            if (tabIndex !== selectedTabs)
                return undefined;
            return (React.createElement("div", { className: "kuc-tabs-tab-contents", key: tabIndex },
                React.createElement("div", null, item.tabContent)));
        });
    return (React.createElement("div", { className: "kuc-tabs-tabs" },
        tabNames,
        tabContents));
};
export default Tabs;
