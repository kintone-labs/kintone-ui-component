var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Control from './Control';
import withState from './withState';
import DialogReact from '../components-react/Dialog';
import React from 'react';

var Dialog = function (_Control) {
  _inherits(Dialog, _Control);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this._reactComponentClass = DialogReact, _this.defaultClose = function () {
      if (typeof _this.onClose === 'function') {
        _this.onClose();
      }
      _this.hide();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'setHeader',
    value: function setHeader(header) {
      this._setState({
        header: header
      });
    }
  }, {
    key: 'getHeader',
    value: function getHeader() {
      return this._getState().header;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this._setState({
        content: content
      });
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this._getState().content;
    }
  }, {
    key: 'setFooter',
    value: function setFooter(footer) {
      this._setState({
        footer: footer
      });
    }
  }, {
    key: 'getFooter',
    value: function getFooter() {
      return this._getState().footer;
    }
  }, {
    key: '_getReactElement',
    value: function _getReactElement() {
      var _this2 = this;

      var Component = withState(this._reactComponentClass);
      var additionalProps = { onClose: this.defaultClose };
      // eslint-disable-next-line react/jsx-filename-extension
      var reactElement = React.createElement(Component, Object.assign({}, this.props, additionalProps, { ref: function ref(el) {
          return _this2._reactObject = el;
        } }));
      return reactElement;
    }
  }]);

  return Dialog;
}(Control);

export default Dialog;