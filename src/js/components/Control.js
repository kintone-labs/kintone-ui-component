/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {render} from 'react-dom';
import withState from './withState';
import Message from '../constant/Message';
const validEventNames = ['click', 'change'];
export default class Control {
  constructor(props) {
    this.props = props;
    this.events = {};
  }

  _setState(state) {
    this.props = {...this.props, ...state};
    if (this._reactObject) {
      this._reactObject.setState(state);
    }
  }

  _getState() {
    return this.props;
  }

  render() {
    const newEl = this._renderReactObject();
    if (this.el !== undefined) {
      this.el.parentNode.replaceChild(newEl, this.el);
    }
    this.el = newEl;
    return this.el;
  }

  _handleOnChange = (value) => {
    if (typeof this.onChange === 'function') {
      this._triggerOnChange(value);
    }
    this._setStateAfterEventHandler(value);
  }

  _handleOnRowAdd = (value) => {
    if (typeof this.rowAdd === 'function') {
      this.rowAdd(value);
    }
    this._setStateAfterEventHandler(value);
  }

  _handleOnRowRemove = (value) => {
    if (typeof this.rowRemove === 'function') {
      this.rowRemove(value);
    }
    this._setStateAfterEventHandler(value);
  }

  _handleOnCellClick = (value) => {
    if (typeof this.cellClick === 'function') {
      this.cellClick(value);
    }
    this._setStateAfterEventHandler(value);
  }

  _handleOnPopupClose = () => {
    if (typeof this.onClose === 'function') {
      this.onClose();
    }
    this.hide();
  }

  _setStateAfterEventHandler(value) {
    if (value.tableValue) {
      this._reactObject.setState({value: value.tableValue});
    } else {
      this._reactObject.setState({value});
    }
  }

  _triggerOnChange(value) {
    this.onChange(value);
  }

  _renderReactObject() {
    const container = document.createElement('div');
    this._reactObject = render(
      this._getReactElement(),
      container
    );
    this._reactObject.setState({onChange: this._handleOnChange});
    if (this._reactComponentClass.name === 'Table') {
      this._reactObject.setState({
        onCellChange: this._handleOnChange,
        onCellClick: this._handleOnCellClick,
        onRowAdd: this._handleOnRowAdd,
        onRowRemove: this._handleOnRowRemove,
      });
    }
    if (this._reactComponentClass.name === 'NotifyPopup') {
      this._reactObject.setState({onClose: this._handleOnPopupClose});
    }
    return container;
  }

  _getReactElement() {
    const Component = withState(this._reactComponentClass);
    // eslint-disable-next-line react/jsx-filename-extension
    const reactElement = <Component {...this.props} />;
    return reactElement;
  }

  on(eventName, callback) {
    if (!validEventNames.some(event => event === eventName)) {
      throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
    }
    if (eventName === 'change') {
      this.onChange = callback;
      return;
    }
    this._reactObject.setState({['on' + eventName.charAt(0).toUpperCase() + eventName.slice(1)]: callback});
  }

  show() {
    this._setState({isVisible: true});
  }

  hide() {
    this._setState({isVisible: false});
  }

  disable() {
    this._setState({isDisabled: true});
  }

  enable() {
    this._setState({isDisabled: false});
  }
}
