import Control from './Control';
import DialogReact from '../components-react/Dialog';

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
}