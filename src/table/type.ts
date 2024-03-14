import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type TableColumn = {
  field: string;
  title?: string | HTMLElement;
  requiredIcon?: boolean;
  visible?: boolean;
  render?: Render;
};

export declare type Render = (
  cellData: any,
  rowData: object,
  rowIndex: number,
) => HTMLElement;

export declare type TableProps<T extends object = object> = {
  className?: string;
  id?: string;
  label?: string;
  data?: T[];
  columns?: TableColumn[];
  actionButton?: boolean | { add?: boolean; remove?: boolean };
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
  columns: TableColumn[];
  data: T[];
  actionButton: boolean | { add?: boolean; remove?: boolean };
  headerVisible: boolean;
  visible: boolean;
  constructor(props?: TableProps<T>);
  update(changedProperties: PropertyValues): void;
  render(): import("lit-html").TemplateResult<1>;
}
