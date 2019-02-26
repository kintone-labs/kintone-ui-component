import TabsReact from '../components-react/Tabs';
import AbstractTabsSelection from './AbstractTabsSelection';
import Message from '../constant/Message';
const validEventNames = ['select'];

export default class Tabs extends AbstractTabsSelection {
  constructor(props_opt) {
    let props = {};
    if (props_opt.items) {
      const items = props_opt.items.map(item => {
        let itemArr = {};
        if (typeof item.tabContent === 'string') {
          itemArr = {
            'tabName': item.tabName,
            'tabContent': item.tabContent
          };
        } else {
          const elem = item.tabContent.render().outerHTML;
          itemArr = {
            'tabName': item.tabName,
            'tabContent': elem
          };
        }
        return itemArr;
      });
      props = {...props_opt, items: items};
    }
    super(props);
    this._reactComponentClass = TabsReact;
  }

  disableItem(value) {
    return this._setDisabledItem(value, true);
  }

  enableItem(value) {
    return this._setDisabledItem(value, false);
  }

  addItem(item) {
    const prevState = this._getState();
    this._setState({items: prevState.items ? prevState.items.concat([item]) : [item]});
  }

  removeItem(index) {
    this._removeItem(index);
  }

  getItems() {
    return this._getState().items;
  }

  setValue(value) {
    this._setState({value});
  }

  getValue() {
    return this._getState().value;
  }

  on(eventName, callback) {
    if (!validEventNames.some(event => event === eventName)) {
      throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
    }
    if (validEventNames.some(event => event === eventName)) {
      this.onSelect = callback;
    }
    const formatEventName = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
    this._reactObject.setState({[formatEventName]: callback});
  }
}
