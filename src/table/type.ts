import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";
export declare type Column = {
  headerName?: string;
  field: string;
  requiredIcon?: boolean;
  visible?: boolean;
  render?: Render;
};
export declare type Render = (
  dataCell: any,
  dataRow: object,
  rowIndex: number
) => HTMLElement;
export declare type TableProps = {
  className?: string;
  id?: string;
  label?: string;
  data?: object[];
  columns?: Column[];
  actionButton?: boolean;
  visible?: boolean;
};
export declare class Table extends KucBase {
  className: string;
  id: string;
  label: string;
  columns: Column[];
  data: object[];
  actionButton: boolean;
  visible: boolean;
  constructor(props?: TableProps);
  update(changedProperties: PropertyValues): void;
  render(): import("lit-html").TemplateResult<1>;
}
