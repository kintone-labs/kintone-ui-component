export default class TableCell {
  constructor({init, update} = {}) {
    this._init = init;
    this._update = update;
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
