import Control from './Control';
import ColorPickerReact from '../components-react/ColorPicker';
import React from 'react';
import Message from '../constant/Message';

const validEventNames = ['changeComplete', 'accept', 'cancel'];
export default class ColorPicker extends Control {
    _reactComponentClass = ColorPickerReact;

    _getReactElement() {
      const Component = this._reactComponentClass;
      // eslint-disable-next-line react/jsx-filename-extension
      const reactElement = <Component {...this.props} ref={el => (this._reactObject = el)} />;
      return reactElement;
    }

    on(eventName, callback) {
      if (!validEventNames.some(event => event === eventName)) {
        throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
      }
      this._reactObject.setState({['on' + eventName.charAt(0).toUpperCase() + eventName.slice(1)]: callback});
    }

    setColor(color) {
      this._setState({color: color});
    }

    getColor() {
      return this._reactObject.inner.state.currentColor.hex;
    }
}