import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker, {registerLocale} from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import zh from 'date-fns/locale/zh-CN';
import en from 'date-fns/locale/en-US';

class DateTime extends React.PureComponent {
  constructor(props) {
    super(props);
    ja.options.firstWeekContainsDate = 1;
    ja.options.weekStartsOn = 0;
    en.options.firstWeekContainsDate = 1;
    en.options.weekStartsOn = 0;
    zh.options.firstWeekContainsDate = 1;
    zh.options.weekStartsOn = 0;
    registerLocale('ja', ja);
    registerLocale('zh', zh);
    registerLocale('en', en);
  }
  _handleChangeDate = (date) => {
    if (this.props.value === '') {
      this.props.value = date;
      this.setState({});
      if (this.props.onChange != null) {
        this.props.onChange(date);
      }
    } else {
      if (date == null) {
        if (this.props.type == 'date') {
          this._clear();
        } else {
          const today = new Date();
          this.props.value.setFullYear(today.getFullYear());
          this.props.value.setMonth(today.getMonth());
          this.props.value.setDate(today.getDate());
        }
      } else {
        this.props.value.setFullYear(date.getFullYear());
        this.props.value.setMonth(date.getMonth());
        this.props.value.setDate(date.getDate());
      }
      this.setState({});
      if (this.props.onChange != null) {
        this.props.onChange(this.props.value);
      }
    }
  }

  _getClassName = (type) => {
    return [
      'kuc-',
      type
    ].join('').trim();
  }

  _getButtonLabel = (locale) => {
    if (locale === 'ja') {
      return {
        today: 'today',
        clear: 'none'
      };
    }
    if (locale === 'en') {
      return {
        today: 'today',
        clear: 'none'
      };
    }
    if (locale === 'zh') {
      return {
        today: '今天',
        clear: '清空'
      };
    }
    return {
      today: '',
      clear: ''
    }
  }

  _selectToday = () => {
    this._handleChangeDate(new Date());
  }
  _clear = () => {
    this.props.value = '';
    this.setState({});
    if (this.props.onChange != null) {
      this.props.onChange('');
    }
  }
  _handleChangeTime = (date) => {
    if (this.props.value === '') {
      this.props.value = date;
      this.setState({});
      if (this.props.onChange != null) {
        this.props.onChange(date);
      }
    } else {
      if (date == null) {
        if (this.props.type == 'time') {
          this._clear();
        } else {
          this.props.value.setHours(0);
          this.props.value.setMinutes(0);
        }
      } else {
        this.props.value.setHours(date.getHours());
        this.props.value.setMinutes(date.getMinutes());
      }
      this.setState({});
      if (this.props.onChange != null) {
        this.props.onChange(this.props.value);
      }
    }
  }
  _createDateItem = () => {
    return (
      <DateTimePicker
        dateFormat="yyyy-MM-dd"
        locale={this.props.locale}
        className="kuc-input-date-text"
        selected={this.props.value}
        onChange={this._handleChangeDate}
        disabled={this.props.isDisabled}
      >
        <div className="kuc-clender-fotter">
          <tr>
            <td className="kuc-select-today-btn">
              <a onClick={this._selectToday}>{this._getButtonLabel(this.props.locale).today}</a>
            </td>
            <td className="kuc-clear-btn">
              <a onClick={this._clear}>{this._getButtonLabel(this.props.locale).clear}</a>
            </td>
          </tr>
        </div>
      </DateTimePicker>
    );
  }
  _createTimeItem = () => {
    return (
      <DateTimePicker
        locale="en"
        className="kuc-input-time-text"
        timeIntervals={this.props.timeIntervals}
        timeFormat={(this.props.timeFormat === 'ampm') ? 'h:mm aa' : 'HH:mm'}
        dateFormat={(this.props.timeFormat === 'ampm') ? 'h:mm aa' : 'HH:mm'}
        selected={this.props.value}
        onChange={this._handleChangeTime}
        showTimeSelect
        showTimeSelectOnly
        disabled={this.props.isDisabled}
      />
    );
  }
  render() {
    if (this.props.isVisible === false) {
      return null;
    }
    // render時にデフォルト値をセット
    if (this.props.type == null) {
      this.props.type = 'datetime';
    }
    if (this.props.value == null) {
      this.props.value = '';
    }
    if (this.props.timeIntervals == null) {
      this.props.timeIntervals = 30;
    }
    if (this.props.locale == null) {
      this.props.locale = 'ja';
    }
    if (this.props.timeFormat == null) {
      this.props.timeFormat = '24';
    }
    return (
      <div
        className={this._getClassName(this.props.type)}
        style={{display: 'inline-flex'}}
      >
        {(this.props.type.indexOf('date') > -1) && this._createDateItem()}
        {(this.props.type.indexOf('time') > -1) && this._createTimeItem()}
      </div>
    );
  }
}
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
