import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";
export declare type Column = {
  headerName?: string;
  dataIndex: string;
  requiredIcon?: boolean;
  visible?: boolean;
  render?: Render;
};
declare type Render = (dataCell: any, dataRow: object) => HTMLElement;
export declare type TableProps = {
  className?: string;
  id?: string;
  label?: string;
  data?: string[][];
  columns?: Column[];
  visible?: boolean;
};
export declare class Table extends KucBase {
  className: string;
  id: string;
  label: string;
  columns: Column[];
  data: object[];
  visible: boolean;
  constructor(props?: TableProps);
  update(changedProperties: PropertyValues): void;
  private _getDefaultRowData;
  private _deepCloneObject;
  private _getTableRowTemplate;
  private _getTableCellTemplate;
  private _dispatchChangeEvent;
  private _getActionsTemplate;
  private _getColumnsTemplate;
  private _getTableHeaderTemplate;
  render(): import("lit-html").TemplateResult<1>;
  private _validateColumns;
  private _validateData;
}
