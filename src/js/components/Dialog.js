import Control from './Control';
import DialogReact from '../components-react/Dialog';
export default class Dialog extends Control {
  _reactComponentClass = DialogReact;
  setHeader(header) {
    this._setState({header});
  }

  getHeader() {
    let state = this._getState() 
    return state.header
  }

  setContent(content) {
    this._setState({content});
  }

  getContent() {
    let state = this._getState() 
    return state.content
  }

  setFooter(footer) {
    this._setState({footer});
  }

  getFooter() {
    let state = this._getState() 
    return state.footer
  }
}
