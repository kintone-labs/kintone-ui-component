import React from 'react';
import '../../css/Spinner.css';
var Spinner = function (_a) {
    var _b = _a.isVisible, isVisible = _b === void 0 ? false : _b;
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: "kuc-spinner-outer" },
        React.createElement("div", { className: "kuc-spinner" },
            React.createElement("div", { className: "kuc-loader" }))));
};
export default Spinner;
