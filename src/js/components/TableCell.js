export default class TableCell {
  constructor({init, update, props} = {}) {
    this._init = init;
    this._update = update;
    this.props = props;
  }

  init(...args) {
    if (this._init) {
      return this._init(...args);
    }
    return false;
  }

  update(...args) {
    if (this._update) {
      this._update(...args);
    }
  }
}
