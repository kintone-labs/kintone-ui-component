import * as tslib_1 from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/TextArea.css';
var TextArea = /** @class */ (function (_super) {
    tslib_1.__extends(TextArea, _super);
    function TextArea(props) {
        var _this_1 = _super.call(this, props) || this;
        _this_1._onChange = function (event) {
            var value = event.target.value;
            _this_1.props.onChange(value);
        };
        _this_1.currentX = null;
        _this_1.currentY = null;
        _this_1.mixTextAreaWidth = 297;
        _this_1.mixtTextAreaHeight = 123;
        _this_1.state = {
            translateX: 0,
            translateY: 0,
            textAreaWidth: _this_1.mixTextAreaWidth,
            textAreaHeight: _this_1.mixtTextAreaHeight,
        };
        return _this_1;
    }
    TextArea.prototype._onMouseDown = function () {
        var _this = this;
        var eventMouseMove = document.onmousemove;
        var eventMouseUp = document.onmouseup;
        document.onmousemove = function (event) {
            if (_this.currentX && _this.currentY) {
                var dx_1 = event.clientX - _this.currentX;
                if (_this.state.textAreaWidth + dx_1 < _this.mixTextAreaWidth) {
                    dx_1 = 0;
                }
                var dy_1 = event.clientY - _this.currentY;
                if (_this.state.textAreaHeight + dy_1 < _this.mixtTextAreaHeight) {
                    dy_1 = 0;
                }
                _this.setState(function (prevState) { return ({ translateX: prevState.translateX + dx_1,
                    translateY: prevState.translateY + dy_1,
                    textAreaWidth: prevState.textAreaWidth + dx_1,
                    textAreaHeight: prevState.textAreaHeight + dy_1
                }); });
            }
            _this.currentX = event.clientX;
            _this.currentY = event.clientY;
        };
        document.onmouseup = function () {
            document.onmousemove = eventMouseMove;
            document.onmouseup = eventMouseUp;
            _this.currentX = null;
            _this.currentY = null;
        };
    };
    TextArea.prototype.render = function () {
        var _this_1 = this;
        if (this.props.isVisible === false) {
            return null;
        }
        return (React.createElement("div", { className: "kuc-textarea-outer", style: { width: this.state.textAreaWidth + 'px', height: this.state.textAreaHeight + 'px' } },
            React.createElement("textarea", { value: this.props.value, className: "kuc-textarea", onClick: this.props.onClick, onChange: this._onChange, disabled: this.props.isDisabled, style: { width: this.state.textAreaWidth + 'px', height: this.state.textAreaHeight + 'px' } }),
            React.createElement("div", { className: "kuc-textarea-resize", style: { transform: "translate(" + this.state.translateX + "px, " + this.state.translateY + "px)" }, onMouseDown: function (event) { return _this_1._onMouseDown(event); } })));
    };
    TextArea.propTypes = {
        value: PropTypes.string,
        isVisible: PropTypes.bool,
        isDisabled: PropTypes.bool,
        onClick: PropTypes.func,
        onChange: PropTypes.func,
    };
    return TextArea;
}(React.PureComponent));
export default TextArea;
TextArea.defaultProps = {
    onChange: function (f) { return f; }
};
