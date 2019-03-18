var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import Control from './Control';
import withState from './withState';
import DialogReact from '../components-react/Dialog';
import React from 'react';
import { render, findDOMNode } from 'react-dom';

var HeaderJSX = function (_React$Component) {
  _inherits(HeaderJSX, _React$Component);

  function HeaderJSX() {
    _classCallCheck(this, HeaderJSX);

    return _possibleConstructorReturn(this, (HeaderJSX.__proto__ || Object.getPrototypeOf(HeaderJSX)).apply(this, arguments));
  }

  _createClass(HeaderJSX, [{
    key: 'render',
    value: function render() {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        React.createElement('div', null)
      );
    }
  }]);

  return HeaderJSX;
}(React.Component);

var ContentJSX = function (_React$Component2) {
  _inherits(ContentJSX, _React$Component2);

  function ContentJSX() {
    _classCallCheck(this, ContentJSX);

    return _possibleConstructorReturn(this, (ContentJSX.__proto__ || Object.getPrototypeOf(ContentJSX)).apply(this, arguments));
  }

  _createClass(ContentJSX, [{
    key: 'render',
    value: function render() {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        React.createElement('div', null)
      );
    }
  }]);

  return ContentJSX;
}(React.Component);

var FooterJSX = function (_React$Component3) {
  _inherits(FooterJSX, _React$Component3);

  function FooterJSX() {
    _classCallCheck(this, FooterJSX);

    return _possibleConstructorReturn(this, (FooterJSX.__proto__ || Object.getPrototypeOf(FooterJSX)).apply(this, arguments));
  }

  _createClass(FooterJSX, [{
    key: 'render',
    value: function render() {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        React.createElement('div', null)
      );
    }
  }]);

  return FooterJSX;
}(React.Component);

var Dialog = function (_Control) {
  _inherits(Dialog, _Control);

  function Dialog() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Dialog);

    props.headerJSX = React.createElement(HeaderJSX, { ref: function ref(e) {
        return _this4.headerContent = e;
      } });
    props.contentJSX = React.createElement(ContentJSX, { ref: function ref(e) {
        return _this4.contentContent = e;
      } });
    props.footerJSX = React.createElement(FooterJSX, { ref: function ref(e) {
        return _this4.footerContent = e;
      } });

    var _this4 = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this4.defaultClose = function () {
      if (typeof _this4.onClose === 'function') {
        _this4.onClose();
      }
      _this4.hide();
    };

    _this4._reactComponentClass = DialogReact;
    _this4.header = props.header;
    _this4.content = props.content;
    _this4.footer = props.footer;
    return _this4;
  }

  _createClass(Dialog, [{
    key: 'setHeader',
    value: function setHeader(header) {
      this.header = header;
      if (this.headerDOMNode) {
        this.headerDOMNode.innerHTML = '';
        this.headerDOMNode.append(header);
      }
    }
  }, {
    key: 'getHeader',
    value: function getHeader() {
      return this.header;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
      if (this.contentDOMNode) {
        this.contentDOMNode.innerHTML = '';
        this.contentDOMNode.append(content);
      }
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'setFooter',
    value: function setFooter(footer) {
      this.footer = footer;
      if (this.footerDOMNode) {
        this.footerDOMNode.innerHTML = '';
        this.footerDOMNode.append(footer);
      }
    }
  }, {
    key: 'getFooter',
    value: function getFooter() {
      return this.footer;
    }
  }, {
    key: '_getReactElement',
    value: function _getReactElement() {
      var _this5 = this;

      var Component = withState(this._reactComponentClass);
      var additionalProps = { onClose: this.defaultClose };
      // eslint-disable-next-line react/jsx-filename-extension
      var reactElement = React.createElement(Component, Object.assign({}, this.props, additionalProps, { ref: function ref(el) {
          return _this5._reactObject = el;
        } }));
      return reactElement;
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
      var _this6 = this;

      var newEl = this._renderReactObject(function () {
        _this6.headerDOMNode = findDOMNode(_this6.headerContent);
        _this6.contentDOMNode = findDOMNode(_this6.contentContent);
        _this6.footerDOMNode = findDOMNode(_this6.footerContent);
        _this6.headerDOMNode && _this6.headerDOMNode.append(_this6.header || '');
        _this6.contentDOMNode && _this6.contentDOMNode.append(_this6.content || '');
        _this6.footerDOMNode && _this6.footerDOMNode.append(_this6.footer || '');
      });
      if (this.el !== undefined) {
        this.el.parentNode.replaceChild(newEl, this.el);
      }
      this.el = newEl;
      return this.el;
    }
  }]);

  return Dialog;
}(Control);

export default Dialog;