type TableCellProps = {
  init?: Function, 
  update?: Function
}

export default class TableCell {
  private _init: Function
  private _update: Function
  constructor({init, update}: TableCellProps = {}) {
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
