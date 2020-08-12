type TableCellInitParams = {
  table: any
  rowData: any
  rowIndex: number
  columnIndex: number
  updateRowData: any
}

type TableCellUpdateParams = {
  table: any
  rowData: any
  rowIndex: number
  columnIndex: number
  element: HTMLElement | null
}

type TableCellProps = {
  init?: (arg?: TableCellInitParams) => HTMLElement | null;
  update?: (arg?: TableCellUpdateParams) => void;
}

export default class TableCell {
  private _init?: (arg?: TableCellInitParams) => HTMLElement | null
  private _update?: (arg?: TableCellUpdateParams) => void;
  constructor({init, update}: TableCellProps = {}) {
    this._init = init;
    this._update = update;
  }

  init(...args: any[]) {
    if (this._init) {
      return this._init(...args);
    }
    return null;
  }

  update(...args: any[]) {
    if (this._update) {
      this._update(...args);
    }
  }
}
