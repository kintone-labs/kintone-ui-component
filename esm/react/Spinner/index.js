import React from 'react';
import '../../css/Spinner.css';
var Spinner = function (_a) {
    var isVisible = _a.isVisible;
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: "kuc-spinner-outer" },
        React.createElement("div", { className: "kuc-spinner" },
            React.createElement("div", { className: "kuc-loader" }))));
};
export default Spinner;
