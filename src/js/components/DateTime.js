import Control from './Control';
import DateTimeReact from '../components-react/DateTime';
export default class DateTime extends Control {
  _reactComponentClass = DateTimeReact;

  getValue() {
    return this._getState().value;
  }
  setValue(value) {
    this._setState({value});
  }
  getLocale() {
    return this._getState().locale;
  }
  setLocale(locale) {
    this._setState({locale});
  }
  getType() {
    return this._getState().type;
  }
  setType(type) {
    this._setState({type});
  }
  geTimeFormat() {
    return this._getState().timeFormat;
  }
  setTimeFormat(timeFormat) {
    this._setState({timeFormat});
  }
  getTimeIntervals() {
    return this._getState().timeIntervals;
  }
  setTimeIntervals(timeIntervals) {
    this._setState({timeIntervals});
  }
}