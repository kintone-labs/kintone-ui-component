import React from "react";
import "../../css/font.css";
import "../../css/Tabs.css";
import Message from "../../constant/Message";
var Tabs = function (_a) {
    var items = _a.items, value = _a.value, onClickTabItem = _a.onClickTabItem;
    if (value) {
        if (typeof value !== "number") {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
        if (!items || value > items.length - 1 || value < 0) {
            throw new Error(Message.common.INVALID_ARGUMENT);
        }
    }
    var tabNames = (React.createElement("ul", { className: "kuc-tabs-tab-list" }, items.map(function (item, tabIndex) {
        if (!item.tabName) {
            throw new Error(Message.tabs.MISSING_TAB_NAME.replace("{{index}}", tabIndex.toString()));
        }
        var className = "kuc-tabs-container";
        if (value === tabIndex) {
            className += " kuc-tabs-container-selection";
        }
        if (item.isDisabled) {
            className += " kuc-tabs-disabled";
            return (React.createElement("li", { className: className, key: tabIndex }, item.tabName));
        }
        return (React.createElement("li", { className: className, key: tabIndex, onClick: function () { return onClickTabItem(tabIndex); } }, item.tabName));
    })));
    var tabContents = items.map(function (item, tabIndex) {
        if (tabIndex !== value)
            return undefined;
        return (React.createElement("div", { className: "kuc-tabs-tab-contents", key: tabIndex },
            React.createElement("div", null, item.tabContent)));
    });
    return (React.createElement("div", { className: "kuc-tabs-tabs" },
        tabNames,
        tabContents));
};
export default Tabs;
