import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type Column = {
  field: string;
  title?: string;
  requiredIcon?: boolean;
  visible?: boolean;
  render?: Render;
};

export declare type Render = (
  cellData: any,
  rowData: object,
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

export declare type TableChangeEventDetail = {
  rowIndex: number;
  data: object[] | undefined;
  oldData: object[] | undefined;
  field?: string;
  type: string;
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
