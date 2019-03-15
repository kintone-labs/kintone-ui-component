/* eslint-disable react/jsx-filename-extension */
import TabsReact from '../components-react/Tabs';
import AbstractSingleSelection from './AbstractSingleSelection';
import Message from '../constant/Message';
import withState from './withState';
import React from 'react';
import PropTypes from 'prop-types';

class TabContentJSX extends React.PureComponent {
  static propTypes = {
    content: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.spanContent = null;
    this.setSpanContentRef = element => {
      this.spanContent = element;
    };
  }

  componentDidMount = () => {
    this.spanContent.append(this.props.content);
  }

  render() {
    return <span ref={this.setSpanContentRef} />;
  }
}

export default class Tabs extends AbstractSingleSelection {
  constructor(props_opt) {
    if (props_opt.items === undefined) {
      props_opt.items = [];
    }
    props_opt.items = props_opt.items.map((item, i) => {
      if (typeof item.tabContent !== 'string') {
        item.tabContentJSX = <TabContentJSX content={item.tabContent} />;
      }
      return item;
    });
    super(props_opt);
    this._reactComponentClass = TabsReact;
    this.props = props_opt;
    this.onSelect = props_opt.onSelect;
    this.validEventNames = ['select'];
  }

  _setDisabledItem(value, isDisabled) {
    if (!this._getState().items) {
      return;
    }
    const newItems = [...this._getState().items];
    newItems.forEach((item, i) => {
      if (item.tabName === value) {
        newItems[i].isDisabled = isDisabled;
      }
    });
    this._setState({items: newItems});
  }

  _onSelect = (item, index, last) => {
    let switchTab = true;
    if (this.onSelect) {
      switchTab = this.onSelect(item, index, last);
      switchTab = switchTab !== undefined ? switchTab : true;
    }
    if (switchTab) {
      this._setState({value: index});
    }
    return true;
  }

  _getReactElement() {
    const Component = withState(this._reactComponentClass);
    const additionalProps = {onSelect: this._onSelect};
    // eslint-disable-next-line react/jsx-filename-extension
    const reactElement = <Component {...this.props} {...additionalProps} />;
    return reactElement;
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
    if (isNaN(value) && !isFinite(value) || value === '') {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }

    const items = this._getState().items;
    if (!items || !items[value]) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }
    this._setState({value});
  }

  getValue() {
    return this._getState().value;
  }

  on(eventName, callback) {
    if (!this.validEventNames.some(event => event === eventName)) {
      throw new Error(Message.control.INVALID_EVENT + ' ' + this.validEventNames.join(','));
    }
    this['on' + eventName.charAt(0).toUpperCase() + eventName.slice(1)] = callback;
  }
}
