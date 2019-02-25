import Control from './Control';
import FieldGroupReact from '../components-react/FieldGroup';
import Message from '../constant/Message';

export default class FieldGroup extends Control {
  constructor(props_opt) {
    let props = {};
    if (props_opt.items) {
      const items = props_opt.items.map(item => {
        let itemArr = {};
        if (typeof item.value === 'string') {
          itemArr = {
            'value': item.value
          };
        } else {
          const elem = item.value.render().outerHTML;
          itemArr = {
            'value': elem
          };
        }
        return itemArr;
      });
      props = {...props_opt, items: items};
    }
    super(props);
    this._reactComponentClass = FieldGroupReact;
  }

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
    this._setState({items: prevState.items ? prevState.items.concat([item]) : [item]});
  }

  removeItem(index) {
    if (isNaN(index) && !isFinite(index) || index === '') {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }

    const items = this._getState().items;
    if (!items || !items[index]) {
      return;
    }

    if (items[index].value === this._getState().value) {
      this._setState({value: undefined});
    }

    items.splice(index, 1);
    this._setState({items: items});
  }

  getItems() {
    return this._getState().items;
  }
}