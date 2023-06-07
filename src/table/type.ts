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

export declare type TableProps<T extends object = object> = {
  className?: string;
  id?: string;
  label?: string;
  data?: T[];
  columns?: Column[];
  actionButton?: boolean;
  headerVisible?: boolean;
  visible?: boolean;
};

export declare type TableChangeEventDetail<T extends object = object> = {
  rowIndex: number;
  data: T[] | undefined;
  oldData: T[] | undefined;
  field?: string;
  type: string;
};

export declare class Table<T extends object = object> extends KucBase {
  className: string;
  id: string;
  label: string;
  columns: Column[];
  data: T[];
  actionButton: boolean;
  headerVisible: boolean;
  visible: boolean;
  constructor(props?: TableProps<T>);
  update(changedProperties: PropertyValues): void;
  render(): import("lit-html").TemplateResult<1>;
}
