import Control from './Control';
import Message from '../constant/Message';
export default class AbstractMultiSelection extends Control {

  _setDisabledItem(value, isDisabled) {
    if (!this._getState().items) {
      return;
    }
    const newItems = [...this._getState().items];
    newItems.forEach((item, i) => {
      if (item.value === value) {
        newItems[i].isDisabled = isDisabled;
      }
    });
    this._setState({items: newItems});
  }

  _setValue(value) {
    if (!this._getState().items) {
      return;
    }
    this._setState({value: value});
  }

  _removeItem(index) {

    if (isNaN(index) && !isFinite(index) || index === '') {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }

    const items = this._getState().items;
    if (!items || !items[index]) {
      return;
    }

    let value = this._getState().value;
    if (value && items[index]) {
      value = value.filter(item => item !== items[index].value);
      this._setState({value: value});
    }

    items.splice(index, 1);
    this._setState({items: items});
  }
}