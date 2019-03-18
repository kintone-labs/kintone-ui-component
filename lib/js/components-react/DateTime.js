var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import zh from 'date-fns/locale/zh-CN';
import en from 'date-fns/locale/en-US';

var GHOST_EVENT_TIMEOUT = 300;
// this class is used to fix Safari input focus bug

var InputWrapper = function (_React$Component) {
  _inherits(InputWrapper, _React$Component);

  function InputWrapper() {
    _classCallCheck(this, InputWrapper);

    return _possibleConstructorReturn(this, (InputWrapper.__proto__ || Object.getPrototypeOf(InputWrapper)).apply(this, arguments));
  }

  _createClass(InputWrapper, [{
    key: 'focus',
    value: function focus() {
      this.input.focus();
    }

    // blur() {
    //   this.input.blur();
    // }

  }, {
    key: 'shouldIgnoreEvent',
    value: function shouldIgnoreEvent(e) {
      var target = e.target,
          relatedTarget = e.relatedTarget;

      if (target.lastEventMs && e.timeStamp < target.lastEventMs + GHOST_EVENT_TIMEOUT) {
        return true;
      }
      target.lastEventMs = e.timeStamp;
      if (relatedTarget) {
        relatedTarget.lastEventMs = e.timeStamp;
      }
      return false;
    }
  }, {
    key: 'allowEvent',
    value: function allowEvent(e) {}
  }, {
    key: 'cancelEvent',
    value: function cancelEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement('input', Object.assign({}, this.props, {
        ref: function ref(el) {
          return _this2.input = el;
        },
        onFocusCapture: function onFocusCapture(e) {
          return _this2.shouldIgnoreEvent(e) ? _this2.cancelEvent(e) : _this2.allowEvent(e);
        },
        onBlurCapture: function onBlurCapture(e) {
          return _this2.shouldIgnoreEvent(e) ? _this2.cancelEvent(e) : _this2.allowEvent(e);
        }
      }));
    }
  }]);

  return InputWrapper;
}(React.Component);

var _getClassName = function _getClassName(type) {
  return ['kuc-', type].join('').trim();
};

var _getButtonLabel = function _getButtonLabel(locale) {
  if (locale === 'en') {
    return {
      today: 'Today',
      clear: 'None'
    };
  }
  if (locale === 'zh') {
    return {
      today: '今天',
      clear: '清空'
    };
  }
  return {
    today: '今日',
    clear: '選択を解除'
  };
};

var _handleOnTodayClick = function _handleOnTodayClick(props) {
  if (props.onChange) {
    props.onChange(new Date());
  }
};

var _handleOnClearClick = function _handleOnClearClick(props) {
  if (props.onChange) {
    props.onChange('');
  }
};

var _createDateItem = function _createDateItem(props) {
  return React.createElement(
    DateTimePicker,
    Object.assign({}, props, {
      dateFormat: 'yyyy-MM-dd',
      selected: props.value,
      className: 'kuc-input-date-text',
      customInput: React.createElement(InputWrapper, null)
    }),
    React.createElement(
      'div',
      { className: 'kuc-clender-fotter' },
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          { className: 'kuc-select-today-btn' },
          React.createElement(
            'a',
            { onClick: function onClick() {
                return _handleOnTodayClick(props);
              } },
            _getButtonLabel(props.locale).today
          )
        ),
        React.createElement(
          'td',
          { className: 'kuc-clear-btn' },
          React.createElement(
            'a',
            { onClick: function onClick() {
                return _handleOnClearClick(props);
              } },
            _getButtonLabel(props.locale).clear
          )
        )
      )
    )
  );
};

var _createTimeItem = function _createTimeItem(props) {
  return React.createElement(DateTimePicker, Object.assign({}, props, {
    locale: 'en',
    timeFormat: props.timeFormat === 'ampm' ? 'h:mm aa' : 'HH:mm',
    dateFormat: props.timeFormat === 'ampm' ? 'h:mm aa' : 'HH:mm',
    selected: props.value,
    showTimeSelect: true,
    showTimeSelectOnly: true,
    disabled: props.isDisabled,
    className: 'kuc-input-time-text',
    customInput: React.createElement(InputWrapper, null)
  }));
};

var DateTime = function DateTime(props) {
  ja.options.firstWeekContainsDate = 1;
  ja.options.weekStartsOn = 0;
  en.options.firstWeekContainsDate = 1;
  en.options.weekStartsOn = 0;
  zh.options.firstWeekContainsDate = 1;
  zh.options.weekStartsOn = 0;
  registerLocale('ja', ja);
  registerLocale('zh', zh);
  registerLocale('en', en);

  var options = Object.assign({}, props);
  if (props.isVisible === false) {
    return null;
  }
  // render時にデフォルト値をセット
  if (options.type == null) {
    options.type = 'datetime';
  }
  if (options.useWeekdaysShort == null) {
    options.useWeekdaysShort = true;
  }
  if (options.value == null) {
    options.value = '';
  }
  if (options.timeIntervals == null) {
    options.timeIntervals = 30;
  }
  if (options.locale !== 'en' && options.locale !== 'zh') {
    props.locale = 'ja';
  }
  if (options.timeFormat !== 'ampm') {
    options.timeFormat = '24';
  }
  return React.createElement(
    'div',
    {
      className: _getClassName(options.type),
      style: { display: 'inline-flex' }
    },
    options.type.indexOf('date') > -1 && _createDateItem(options),
    options.type.indexOf('time') > -1 && _createTimeItem(options)
  );
};

DateTime.propTypes = {
  value: PropTypes.object,
  locale: PropTypes.string,
  timeFormat: PropTypes.string,
  timeIntervals: PropTypes.number,
  type: PropTypes.string,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};
export default DateTime;