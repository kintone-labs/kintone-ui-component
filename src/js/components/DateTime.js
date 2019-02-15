import Control from './Control';
import DateTimeReact from '../components-react/DateTime';
export default class DateTime extends Control {
  _reactComponentClass = DateTimeReact;

  getValue() {
    return this._getState().value;
  }
  getLocale() {
    return this._getState().locale;
  }
  getType() {
    return this._getState().type;
  }
  getTimeIntervals() {
    return this._getState().timeIntervals;
  }
}
