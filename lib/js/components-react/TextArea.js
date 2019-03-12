var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var TextArea = function (_React$PureComponent) {
  _inherits(TextArea, _React$PureComponent);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    var _this2 = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this2._onChange = function (event) {
      var value = event.target.value;
      _this2.props.onChange(value);
    };

    _this2.currentX = null;
    _this2.currentY = null;
    _this2.mixTextAreaWidth = 297;
    _this2.mixtTextAreaHeight = 123;
    _this2.state = {
      translateX: 0,
      translateY: 0,
      textAreaWidth: _this2.mixTextAreaWidth,
      textAreaHeight: _this2.mixtTextAreaHeight
    };
    return _this2;
  }

  _createClass(TextArea, [{
    key: '_onMouseDown',
    value: function _onMouseDown() {
      var _this = this;
      var eventMouseMove = document.onmousemove;
      var eventMouseUp = document.onmouseup;
      document.onmousemove = function (event) {
        if (_this.currentX && _this.currentY) {
          var dx = event.clientX - _this.currentX;
          if (_this.state.textAreaWidth + dx < _this.mixTextAreaWidth) {
            dx = 0;
          }

          var dy = event.clientY - _this.currentY;
          if (_this.state.textAreaHeight + dy < _this.mixtTextAreaHeight) {
            dy = 0;
          }

          _this.setState(function (prevState) {
            return { translateX: prevState.translateX + dx,
              translateY: prevState.translateY + dy,
              textAreaWidth: prevState.textAreaWidth + dx,
              textAreaHeight: prevState.textAreaHeight + dy
            };
          });
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
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.props.isVisible === false) {
        return null;
      }

      return React.createElement(
        'div',
        {
          className: 'kuc-textarea-outer',
          style: { width: this.state.textAreaWidth + 'px', height: this.state.textAreaHeight + 'px' }
        },
        React.createElement('textarea', {
          value: this.props.value,
          className: 'kuc-textarea',
          onClick: this.props.onClick,
          onChange: this._onChange,
          disabled: this.props.isDisabled,
          style: { width: this.state.textAreaWidth + 'px', height: this.state.textAreaHeight + 'px' }
        }),
        React.createElement('div', {
          className: 'kuc-textarea-resize',
          style: { transform: 'translate(' + this.state.translateX + 'px, ' + this.state.translateY + 'px)' },
          onMouseDown: function onMouseDown(event) {
            return _this3._onMouseDown(event);
          }
        })
      );
    }
  }]);

  return TextArea;
}(React.PureComponent);

TextArea.propTypes = {
  value: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
export default TextArea;

TextArea.defaultProps = {
  onChange: function onChange(f) {
    return f;
  }
};