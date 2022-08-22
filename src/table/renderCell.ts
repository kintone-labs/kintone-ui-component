import { html } from "lit";
import { property } from "lit/decorators.js";
import { KucBase } from "../base/kuc-base";
import { Column } from "./type";

let exportTableCell;
(() => {
  exportTableCell = window.customElements.get("kuc-table-cell");
  if (exportTableCell) {
    return;
  }
  class KucTableCell extends KucBase {
    @property({ type: Array }) column: Column = { field: "" };
    @property({ type: Object }) dataRow = {};
    @property({ type: Number }) rowIndex = 0;
    render() {
      const dataCell = (this.dataRow as { [key: string]: any })[
        this.column.field
      ];
      const dataRender = this.column.render
        ? this.column.render(dataCell, this.dataRow, this.rowIndex)
        : dataCell;
      return html`${dataRender}`;
    }
  }

  window.customElements.define("kuc-table-cell", KucTableCell);
  exportTableCell = KucTableCell;
})();
const TableCell = exportTableCell as any;
export { TableCell };
