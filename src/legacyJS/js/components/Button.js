import Control from './Control';
import ButtonReact from '../components-react/Button';
export default class Button extends Control {
  _reactComponentClass = ButtonReact;
  setText(text) {
    this._setState({text});
  }

  setType(type) {
    this._setState({type});
  }
}
