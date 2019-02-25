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

    var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this._onChange = function (event) {
      var value = event.target.value;
      _this.props.onChange(value);
    };

    _this.moving = false;
    _this.currentX = null;
    _this.currentY = null;
    _this.mixTextAreaWidth = 297;
    _this.mixtTextAreaHeight = 123;
    _this.state = {
      translateX: 0,
      translateY: 0,
      textAreaWidth: _this.mixTextAreaWidth,
      textAreaHeight: _this.mixtTextAreaHeight
    };
    window.onmouseup = function (event) {
      return _this._onMouseUp(event);
    };
    window.onmousemove = function (event) {
      return _this._onMouseMove(event);
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: '_onMouseDown',
    value: function _onMouseDown(event) {
      event.stopPropagation();
      this.moving = true;
    }
  }, {
    key: '_onMouseUp',
    value: function _onMouseUp() {
      this.moving = false;
      this.currentX = null;
      this.currentY = null;
    }
  }, {
    key: '_onMouseMove',
    value: function _onMouseMove(event) {
      this.moving && this._onMove(event);
    }
  }, {
    key: '_onMove',
    value: function _onMove(event) {
      if (this.currentX && this.currentY) {
        var dx = event.clientX - this.currentX;
        if (this.state.textAreaWidth + dx < this.mixTextAreaWidth) {
          dx = 0;
        }

        var dy = event.clientY - this.currentY;
        if (this.state.textAreaHeight + dy < this.mixtTextAreaHeight) {
          dy = 0;
        }
        this.setState(function (prevState) {
          return { translateX: prevState.translateX + dx,
            translateY: prevState.translateY + dy,
            textAreaWidth: prevState.textAreaWidth + dx,
            textAreaHeight: prevState.textAreaHeight + dy
          };
        });
      }
      this.currentX = event.clientX;
      this.currentY = event.clientY;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
            return _this2._onMouseDown(event);
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