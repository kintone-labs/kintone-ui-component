import Control from './Control';
import NotifyPopupReact from '../components-react/NotifyPopup';
import withState from './withState';
import React from 'react';
export default class NotifyPopup extends Control {
  _reactComponentClass = NotifyPopupReact;

  setText(text) {
    this._setState({text});
  }

  setType(type) {
    this._setState({type});
  }

  _getReactElement() {
    const Component = withState(this._reactComponentClass);
    const additionalProps = {onClose: this._handleOnPopupClose};
    // eslint-disable-next-line react/jsx-filename-extension
    const reactElement = <Component {...this.props} {...additionalProps} ref={el => (this._reactObject = el)} />;
    return reactElement;
  }
}
