import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker, {registerLocale} from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import zh from 'date-fns/locale/zh-CN';
import en from 'date-fns/locale/en-US';

const GHOST_EVENT_TIMEOUT = 300;
// this class is used to fix Safari input focus bug
class InputWrapper extends React.Component {
  focus() {
    this.input.focus();
  }

  // blur() {
  //   this.input.blur();
  // }

  shouldIgnoreEvent(e) {
    const {target, relatedTarget} = e;
    if (target.lastEventMs && e.timeStamp < target.lastEventMs + GHOST_EVENT_TIMEOUT) {
      return true;
    }
    target.lastEventMs = e.timeStamp;
    if (relatedTarget) {
      relatedTarget.lastEventMs = e.timeStamp;
    }
    return false;
  }

  allowEvent(e) {
  }

  cancelEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    return false;
  }

  render() {
    return React.createElement(
      'input',
      {
        ...this.props,
        ref: (el) => (this.input = el),
        onFocusCapture: (e) => (this.shouldIgnoreEvent(e) ? this.cancelEvent(e) : this.allowEvent(e)),
        onBlurCapture: (e) => (this.shouldIgnoreEvent(e) ? this.cancelEvent(e) : this.allowEvent(e)),
      }
    );
  }
}

const _getClassName = (type) => {
  return [
    'kuc-',
    type
  ].join('').trim();
};

const _getButtonLabel = (locale) => {
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

const _handleOnTodayClick = (props) => {
  if (props.onChange) {
    props.onChange(new Date());
  }
};

const _handleOnClearClick = (props) => {
  if (props.onChange) {
    props.onChange('');
  }
};

const _createDateItem = (props) => {
  return (
    <DateTimePicker
      {...props}
      dateFormat="yyyy-MM-dd"
      selected={props.value}
      className="kuc-input-date-text"
      customInput={<InputWrapper />}
    >
      <div className="kuc-clender-fotter">
        <tr>
          <td className="kuc-select-today-btn">
            <a onClick={() => _handleOnTodayClick(props)}>{_getButtonLabel(props.locale).today}</a>
          </td>
          <td className="kuc-clear-btn">
            <a onClick={() => _handleOnClearClick(props)}>{_getButtonLabel(props.locale).clear}</a>
          </td>
        </tr>
      </div>
    </DateTimePicker>
  );
};

const _createTimeItem = (props) => {
  return (
    <DateTimePicker
      {...props}
      locale="en"
      timeFormat={(props.timeFormat === 'ampm') ? 'h:mm aa' : 'HH:mm'}
      dateFormat={(props.timeFormat === 'ampm') ? 'h:mm aa' : 'HH:mm'}
      selected={props.value}
      showTimeSelect
      showTimeSelectOnly
      disabled={props.isDisabled}
      className="kuc-input-time-text"
      customInput={<InputWrapper />}
    />
  );
};

const DateTime = (props) => {
  ja.options.firstWeekContainsDate = 1;
  ja.options.weekStartsOn = 0;
  en.options.firstWeekContainsDate = 1;
  en.options.weekStartsOn = 0;
  zh.options.firstWeekContainsDate = 1;
  zh.options.weekStartsOn = 0;
  registerLocale('ja', ja);
  registerLocale('zh', zh);
  registerLocale('en', en);

  const options = {...props};
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
  return (
    <div
      className={_getClassName(options.type)}
      style={{display: 'inline-flex'}}
    >
      {(options.type.indexOf('date') > -1) && _createDateItem(options)}
      {(options.type.indexOf('time') > -1) && _createTimeItem(options)}
    </div>
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
  onChange: PropTypes.func,
};
export default DateTime;
