<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var NotifyPopup = function NotifyPopup(props) {
  var _handleClosePopup = function _handleClosePopup() {
    if (props.isDisabled) {
      return false;
    }
    props.onClose();
    return true;
  };

  var _getClassName = function _getClassName() {
    var className = ['kuc-notify', props.isVisible === false ? '' : 'show', _getStyleByType().bgClass];
    return className.join(' ').trim();
  };

  var _onClick = function _onClick() {
    if (props.isDisabled) {
      return false;
    }
    props.onClick();
    return true;
  };

  var _getStyleByType = function _getStyleByType() {
    var style = {
      bgClass: '',
      color: ''
    };
    switch (props.type) {
      case 'success':
        style.bgClass = 'bg-success';
        style.color = 'green';
        break;
      case 'infor':
        style.bgClass = 'bg-infor';
        style.color = 'blue';
        break;

      default:
        style.bgClass = 'bg-danger';
        style.color = 'red';
    }
    return style;
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: _getClassName() },
      React.createElement(
        'div',
        {
          className: 'kuc-notify-title',
          onClick: _onClick
        },
        props.text
      ),
      React.createElement(
        'div',
        { className: 'kuc-close-button' },
        React.createElement(IconButton, {
          onClick: _handleClosePopup,
          type: 'close',
          color: _getStyleByType().color
        })
      )
    )
  );
};
=======
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var NotifyPopup = function (_Component) {
  _inherits(NotifyPopup, _Component);

  function NotifyPopup(props) {
    _classCallCheck(this, NotifyPopup);

    var _this = _possibleConstructorReturn(this, (NotifyPopup.__proto__ || Object.getPrototypeOf(NotifyPopup)).call(this, props));

    _this._handleClosePopup = function () {
      if (_this.props.isDisabled) {
        return false;
      }
      _this.setState({ isVisible: false });
      return true;
    };

    _this._onClick = function () {
      if (_this.props.isDisabled) {
        return false;
      }

      _this.props.onClick();
      return true;
    };

    _this.state = {
      isVisible: _this.props.isVisible
    };
    return _this;
  }

  _createClass(NotifyPopup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var isVisible = _ref.isVisible;

      this.setState({ isVisible: isVisible });
    }
  }, {
    key: '_getClassName',
    value: function _getClassName() {
      var className = ['kuc-notify', this.state.isVisible === false ? '' : 'show', this._getStyleByType().bgClass];
      return className.join(' ').trim();
    }
  }, {
    key: '_getStyleByType',
    value: function _getStyleByType() {
      var style = {
        bgClass: '',
        color: ''
      };
      switch (this.props.type) {
        case 'success':
          style.bgClass = 'bg-success';
          style.color = 'green';
          break;
        case 'infor':
          style.bgClass = 'bg-infor';
          style.color = 'blue';
          break;

        default:
          style.bgClass = 'bg-danger';
          style.color = 'red';
      }
      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: this._getClassName() },
          React.createElement(
            'div',
            {
              className: 'kuc-notify-title',
              onClick: this._onClick
            },
            this.props.text
          ),
          React.createElement(
            'div',
            { className: 'kuc-close-button' },
            React.createElement(IconButton, {
              onClick: this._handleClosePopup,
              type: 'close',
              color: this._getStyleByType().color
            })
          )
        )
      );
    }
  }]);

  return NotifyPopup;
}(Component);

>>>>>>> origin/v0.2.0
NotifyPopup.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
<<<<<<< HEAD
  onClose: PropTypes.func,
=======
>>>>>>> origin/v0.2.0
  onChange: PropTypes.func
};
NotifyPopup.defaultProps = {
  onClick: function onClick(f) {
    return f;
<<<<<<< HEAD
  },
  onClose: function onClose(f) {
    return f;
=======
>>>>>>> origin/v0.2.0
  }
};
export default NotifyPopup;