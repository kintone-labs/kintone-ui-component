import Control from './Control';
import ColorPickerReact from '../components-react/ColorPicker';
import React from 'react';

export default class ColorPicker extends Control {
    _reactComponentClass = ColorPickerReact;

    _getReactElement() {
      const Component = this._reactComponentClass;
      // eslint-disable-next-line react/jsx-filename-extension
      const reactElement = <Component {...this.props} />;
      return reactElement;
    }

    setColor(color) {
      this._setState({color: color});
    }

    getColor() {
      return this._reactObject.inner.state.currentColor.hex;
    }
}