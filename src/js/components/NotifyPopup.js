import Control from './Control';
import NotifyPopupReact from '../components-react/NotifyPopup';
export default class NotifyPopup extends Control {
  _reactComponentClass = NotifyPopupReact;

  setText(text) {
    this._setState({text});
  }

  setType(type) {
    this._setState({type});
  }
}
