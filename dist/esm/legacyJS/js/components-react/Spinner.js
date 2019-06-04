import React from 'react';
import PropTypes from 'prop-types';
var Spinner = function (props) {
    if (props.isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: "kuc-spinner-outer" },
        React.createElement("div", { className: "kuc-spinner" },
            React.createElement("div", { className: "kuc-loader" }))));
};
Spinner.propTypes = {
    isVisible: PropTypes.bool
};
Spinner.defaultProps = {
    isVisible: false
};
export default Spinner;
