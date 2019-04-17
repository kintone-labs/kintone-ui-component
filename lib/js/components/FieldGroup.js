var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Control from './Control';
import FieldGroupReact from '../components-react/FieldGroup';
import React from 'react';
import { findDOMNode, render } from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function

var FieldGroupContent = function (_React$Component) {
  _inherits(FieldGroupContent, _React$Component);

  function FieldGroupContent() {
    _classCallCheck(this, FieldGroupContent);

    return _possibleConstructorReturn(this, (FieldGroupContent.__proto__ || Object.getPrototypeOf(FieldGroupContent)).apply(this, arguments));
  }

  _createClass(FieldGroupContent, [{
    key: 'render',
    value: function render() {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        React.createElement('div', null)
      );
    }
  }]);

  return FieldGroupContent;
}(React.Component);

var FieldGroup = function (_Control) {
  _inherits(FieldGroup, _Control);

  function FieldGroup(props) {
    _classCallCheck(this, FieldGroup);

    props.children = React.createElement(FieldGroupContent, { ref: function ref(e) {
        return _this2.fieldGroupContent = e;
      } });

    var _this2 = _possibleConstructorReturn(this, (FieldGroup.__proto__ || Object.getPrototypeOf(FieldGroup)).call(this, props));

    _this2._reactComponentClass = FieldGroupReact;
    _this2.content = props.content;
    return _this2;
  }

  _createClass(FieldGroup, [{
    key: 'setToggle',
    value: function setToggle(toggle) {
      this._setState({ toggle: toggle });
    }
  }, {
    key: 'getToggle',
    value: function getToggle() {
      return this._getState().toggle;
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this._setState({ name: name });
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this._getState().name;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content.remove();
      this.contentDOMNode.append(content);
      this.content = content;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: '_renderReactObject',
    value: function _renderReactObject(callback) {
      var container = document.createElement('div');
      this._reactObject = render(this._getReactElement(), container, callback);
      return container;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var newEl = this._renderReactObject(function () {
        // eslint-disable-next-line react/no-find-dom-node
        _this3.contentDOMNode = findDOMNode(_this3.fieldGroupContent);
        _this3.contentDOMNode.append(_this3.content);
      });
      if (this.el !== undefined) {
        this.el.parentNode.replaceChild(newEl, this.el);
      }
      this.el = newEl;
      return this.el;
    }
  }]);

  return FieldGroup;
}(Control);

export default FieldGroup;