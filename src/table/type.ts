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
  data?: object[];
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
  render(): import("lit-html").TemplateResult<1>;
}
