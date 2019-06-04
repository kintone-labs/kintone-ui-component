import React, { useState, useEffect } from 'react';
var TextArea = function (_a) {
    var value = _a.value, isVisible = _a.isVisible, isDisabled = _a.isDisabled, onChange = _a.onChange, onClick = _a.onClick;
    var mixTextAreaWidth = 297;
    var mixtTextAreaHeight = 123;
    var _b = useState(0), translateX = _b[0], setTranslateX = _b[1];
    var _c = useState(0), translateY = _c[0], setTranslateY = _c[1];
    var _d = useState(mixTextAreaWidth), textAreaWidth = _d[0], setTextAreaWidth = _d[1];
    var _e = useState(mixtTextAreaHeight), textAreaHeight = _e[0], setTextAreaHeight = _e[1];
    var _f = useState(false), isResizing = _f[0], setIsResizing = _f[1];
    useEffect(function () {
        var currentX;
        var currentY;
        document.onmousemove = function (event) {
            if (isResizing && currentX && currentY) {
                var dx = event.clientX - currentX;
                if (textAreaWidth + dx < mixTextAreaWidth) {
                    dx = 0;
                }
                var dy = event.clientY - currentY;
                if (textAreaHeight + dy < mixtTextAreaHeight) {
                    dy = 0;
                }
                setTranslateX(translateX + dx);
                setTranslateY(translateY + dy);
                setTextAreaWidth(textAreaWidth + dx);
                setTextAreaHeight(textAreaHeight + dy);
            }
            currentX = event.clientX;
            currentY = event.clientY;
        };
        document.onmouseup = function () {
            if (isResizing) {
                setIsResizing(false);
                currentX = null;
                currentX = null;
            }
        };
    });
    var _onChange = function (event) {
        onChange(event.target.value);
    };
    if (isVisible === false) {
        return null;
    }
    return (React.createElement("div", { className: "kuc-textarea-outer", style: { width: textAreaWidth + 'px', height: textAreaHeight + 'px' } },
        React.createElement("textarea", { value: value, className: "kuc-textarea", onClick: onClick, onChange: _onChange, disabled: isDisabled, style: { width: textAreaWidth + 'px', height: textAreaHeight + 'px' } }),
        React.createElement("div", { className: "kuc-textarea-resize", style: { transform: "translate(" + translateX + "px, " + translateY + "px)" }, onMouseDown: function () {
                setIsResizing(true);
            } })));
};
export default TextArea;
