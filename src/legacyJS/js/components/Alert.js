import Control from './Control';
import AlertReact from '../components-react/Alert';

export default class Alert extends Control {
  _reactComponentClass = AlertReact;

  setText(text) {
    this._setState({text});
  }

  setType(type) {
    this._setState({type});
  }
}
