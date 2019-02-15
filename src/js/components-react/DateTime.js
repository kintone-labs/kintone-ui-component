import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker, {registerLocale} from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import zh from 'date-fns/locale/zh-CN';
import en from 'date-fns/locale/en-US';

class DateTime extends React.Component {

  constructor(props) {
    super(props);
    if (props.type == null) {
      props.type = 'datetime';
    }
    if (props.value == null) {
      props.value = '';
    }
    if (props.timeIntervals == null) {
      props.timeIntervals = 30;
    }
    // startDateは'react-datepicker'固有の変数名なので、名前を変更できない
    // ボタン名を定数化するかは要検討
    if (props.locale === 'ja') {
      this.state = {
        startDate: props.value,
        todayButtonLabel: '今日',
        clearButtonLabel: '選択を解除',
        locale: props.locale,
        timeIntervals: props.timeIntervals,
      };
    } else if (props.locale === 'en') {
      this.state = {
        startDate: props.value,
        todayButtonLabel: 'Today',
        clearButtonLabel: 'None',
        locale: props.locale,
        timeIntervals: props.timeIntervals,
      };
    } else if (props.locale === 'zh') {
      this.state = {
        startDate: props.value,
        todayButtonLabel: 'Today',
        clearButtonLabel: 'None',
        locale: props.locale,
        timeIntervals: props.timeIntervals,
      };
    } else {
      // デフォルトの値はjaとする
      props.locale = 'ja';
      this.state = {
        startDate: props.value,
        todayButtonLabel: '今日',
        clearButtonLabel: '選択を解除',
        locale: props.locale,
        timeIntervals: props.timeIntervals,
      };
    }
    this._getClassName = this._getClassName.bind(this);
    this._handleChangeDate = this._handleChangeDate.bind(this);
    this._handleChangeTime = this._handleChangeTime.bind(this);
    this._selectToday = this._selectToday.bind(this);
    this._clear = this._clear.bind(this);

    ja.options.firstWeekContainsDate = 1;
    ja.options.weekStartsOn = 0;
    registerLocale('ja', ja);
    registerLocale('zh', zh);
    registerLocale('en', en);
  }
  _handleChangeDate(date) {
    if (this.state.startDate === '') {
      this.setState({
        startDate: date
      });
      if (this.props.onChange != null) {
        this.props.onChange(date);
      }
    } else {
      this.state.startDate.setFullYear(date.getFullYear());
      this.state.startDate.setMonth(date.getMonth());
      this.state.startDate.setDate(date.getDate());
      if (this.props.onChange != null) {
        this.props.onChange(this.state.startDate);
      }
    }
  }
  _getClassName(type) {
    return [
      'kuc-',
      type
    ].join('').trim();
  }

  _selectToday() {
    this._handleChangeDate(new Date());
  }
  _clear() {
    this.setState({
      startDate: ''
    });
    if (this.props.onChange != null) {
      this.props.onChange('');
    }
  }
  _handleChangeTime(date) {
    if (this.state.startDate === '') {
      this.setState({
        startDate: date
      });
      if (this.props.onChange != null) {
        this.props.onChange(date);
      }
    } else {
      this.state.startDate.setHours(date.getHours());
      this.state.startDate.setMinutes(date.getMinutes());
      if (this.props.onChange != null) {
        this.props.onChange(this.state.startDate);
      }
    }
  }
  _createDateItem() {
    return (
      <DateTimePicker
        dateFormat="yyyy-MM-dd"
        locale={this.state.locale}
        className="kuc-input-date-text"
        selected={this.state.startDate}
        onChange={this._handleChangeDate}
        disabled={this.props.isDisabled}
      >
        <div className="kuc-clender-fotter">
          <tr>
            <td className="kuc-select-today-btn">
              <a onClick={this._selectToday}>{this.state.todayButtonLabel}</a>
            </td>
            <td className="kuc-clear-btn">
              <a onClick={this._clear}>{this.state.clearButtonLabel}</a>
            </td>
          </tr>
        </div>
      </DateTimePicker>
    );
  }
  _createTimeItem() {
    return (
      <DateTimePicker
        locale={this.state.locale}
        className="kuc-input-time-text"
        timeIntervals={this.state.timeIntervals}
        timeFormat="HH:mm"
        dateFormat="HH:mm"
        selected={this.state.startDate}
        onChange={this._handleChangeTime}
        showTimeSelect
        showTimeSelectOnly
        disabled={this.props.isDisabled}
      />
    );
  }
  render() {
    return (
      <div
        className={this._getClassName(this.props.type)}
        style={(this.props.isVisible) ? {display: 'none'} : {display: 'inline-flex'}}
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
  type: PropTypes.string,
  timeIntervals: PropTypes.number,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default DateTime;
