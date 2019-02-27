import Control from './Control';
import withState from './withState';
import DialogReact from '../components-react/Dialog';
import React from 'react';

export default class Dialog extends Control {
  _reactComponentClass = DialogReact;

  setHeader(header) {
    this._setState({
      header: header
    });
  }

  getHeader() {
    return this._getState().header;
  }

  setContent(content) {
    this._setState({
      content: content
    });
  }

  getContent() {
    return this._getState().content;
  }

  setFooter(footer) {
    this._setState({
      footer: footer
    });
  }

  getFooter() {
    return this._getState().footer;
  }

  defaultClose() {
    if (typeof this.onClose === 'function') {
      this.onClose();
    }
    this.hide();
  }

  _getReactElement() {
    const Component = withState(this._reactComponentClass);
    const additionalProps = {onClose: this.defaultClose};
    // eslint-disable-next-line react/jsx-filename-extension
    const reactElement = <Component {...this.props} {...additionalProps} />;
    return reactElement;
  }
}