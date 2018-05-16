import DropdownReact from '../components-react/Dropdown';
import AbstractSingleSelection from './AbstractSingleSelection';

export default class Dropdown extends AbstractSingleSelection {
  _reactComponentClass = DropdownReact;

  setValue(value) {
      this._setState({ value });
  }

  getValue() {
      if (!this._reactObject) {
          return this._getState().value;
      }
      return this.inner._getValue();
  }

  getItems() {
      if (this._reactObject) {
          return this.inner._getItems();
      }
      return this._getState().items;
  }
  addItem(item) {
      const prevState = this._getState();
      this._setState({ items: prevState.items ? prevState.items.concat([item]) : [item] });
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

  disable() {
      return this._setState({isDisabled: true});
  }

  enable() {
      return this._setState({isDisabled: false});
  }
}
