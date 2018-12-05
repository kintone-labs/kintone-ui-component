import Control from './Control';
import IconButtonReact from '../components-react/IconButton';
export default class IconButton extends Control {
  _reactComponentClass = IconButtonReact;

  setType(type) {
    this._setState({type});
  }

  setSize(size) {
    return this._setState({size});
  }
}
