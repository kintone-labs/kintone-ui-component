import Control from './Control';
import FieldGroupReact from '../components-react/FieldGroup';
import Message from '../constant/Message';

export default class FieldGroup extends Control {
    _reactComponentClass = FieldGroupReact;

    setToggle(toggle) {
      this._setState({toggle: toggle});
    }

    getToggle() {
      return this._getState().toggle;
    }

    setName(name) {
      this._setState({name});
    }

    getName() {
      return this._getState().name;
    }

    addItem(item) {
      const prevState = this._getState();
      this._setState({ items: prevState.items ? prevState.items.concat([item]) : [item] });
    }

    removeItem(index) {
      if (isNaN(index) && !isFinite(index) || index === '') {
        throw new Error(Message.common.INVALID_ARGUMENT);
      }

      const items = this._getState().items;
      if (!items || !items[index]) {
        return;
        // eslint-disable-next-line indent
        }

      if (items[index].value === this._getState().value) {
        this._setState({ value: undefined });
      }

      items.splice(index, 1);
      this._setState({ items: items });
    }

    getItems() {
      return this._getState().items;
    }
}