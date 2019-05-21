import AbstractMultiSelection from './AbstractMultiSelection';
import CheckBoxReact from '../components-react/CheckBox';
export default class CheckBox extends AbstractMultiSelection {
  _reactComponentClass = CheckBoxReact;

  setValue(value) {
    this._setValue(value);
  }

  getValue() {
    return this._getState().value;
  }

  getItems() {
    return this._getState().items;
  }

  getItem(index) {
    return this._getState().items[index];
  }

  addItem(item) {
    const prevState = this._getState();
    this._setState({items: prevState.items ? prevState.items.concat([item]) : [item]});
  }

  removeItem(index) {
    this._removeItem(index);
  }

  disableItem(value) {
    return this._setDisabledItem(value, true);
  }

  enableItem(value) {
    return this._setDisabledItem(value, false);
  }

  enable() {
    return this._setState({isDisabled: false});
  }

  disable() {
    return this._setState({isDisabled: true});
  }
}
