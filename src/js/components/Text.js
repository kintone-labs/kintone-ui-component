import Control from './Control';
import TextReact from '../components-react/Text';
export default class Text extends Control {
    _reactComponentClass = TextReact;

    setValue(value) {
      this._setState({value});
    }

    getValue() {
      if (!this._reactObject) {
        return this._getState().value;
      }

      return this.inner._getValue();
    }
}
