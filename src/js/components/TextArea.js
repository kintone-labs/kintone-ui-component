import Control from './Control';
import TextAreaReact from '../components-react/TextArea';
export default class TextArea extends Control {
    _reactComponentClass = TextAreaReact;
    setValue(value) {
      this._setState({value});
    }
    getValue() {
      return this._getState().value;
    }
}
