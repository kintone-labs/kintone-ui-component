var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { render } from 'react-dom';
import withState from './withState';
import Message from '../constant/Message';
var validEventNames = ['click', 'change'];

var Control = function () {
  function Control(props) {
    var _this = this;

    _classCallCheck(this, Control);

    this._handleOnChange = function (value) {
      if (typeof _this.onChange === 'function') {
        _this._triggerOnChange(value);
      }
      _this._setStateAfterOnChange(value);
    };

    this.props = props;
    this.events = {};
  }

  _createClass(Control, [{
    key: '_setState',
    value: function _setState(state) {
      this.props = Object.assign({}, this.props, state);
      if (this._reactObject) {
        this._reactObject.setState(state);
      }
    }
  }, {
    key: '_getState',
    value: function _getState() {
      return this.inner.props;
    }
  }, {
    key: 'render',
    value: function render() {
      this.el = this._renderReactObject();
      return this.el;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var newEl = this._renderReactObject();
      this.el.parentNode.replaceChild(newEl, this.el);
      this.el = newEl;
    }
  }, {
    key: '_setStateAfterOnChange',
    value: function _setStateAfterOnChange(value) {
      this._reactObject.setState({ value: value });
    }
  }, {
    key: '_triggerOnChange',
    value: function _triggerOnChange(value) {
      this.onChange(value);
    }
  }, {
    key: '_renderReactObject',
    value: function _renderReactObject() {
      var container = document.createElement('div');
      this._reactObject = render(this._getReactElement(), container);

      this._reactObject.setState({ onChange: this._handleOnChange });

      return container;
    }
  }, {
    key: '_getReactElement',
    value: function _getReactElement() {
      var Component = withState(this._reactComponentClass);
      // eslint-disable-next-line react/jsx-filename-extension
      var reactElement = React.createElement(Component, this.props);
      return reactElement;
    }
  }, {
    key: 'on',
    value: function on(eventName, callback) {
      if (!validEventNames.some(function (event) {
        return event === eventName;
      })) {
        throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
      }

      if (eventName === 'change') {
        this.onChange = callback;
        return;
      }

      this._reactObject.setState(_defineProperty({}, 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1), callback));
    }
  }, {
    key: 'show',
    value: function show() {
      this._setState({ isVisible: true });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this._setState({ isVisible: false });
    }
  }, {
    key: 'disable',
    value: function disable() {
      this._setState({ isDisabled: true });
    }
  }, {
    key: 'enable',
    value: function enable() {
      this._setState({ isDisabled: false });
    }
  }, {
    key: 'inner',
    get: function get() {
      return this._reactObject.inner;
    }
  }]);

  return Control;
}();

export default Control;