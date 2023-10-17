import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type ReadOnlyTableColumn = {
  field?: string;
  title?: string;
  visible?: boolean;
};

export declare type ReadOnlyTableProps<T extends object = object> = {
  className?: string;
  id?: string;
  label?: string;
  columns?: ReadOnlyTableColumn[];
  data?: T[];
  pagination?: boolean;
  rowsPerPage?: number;
  visible?: boolean;
};

export declare class ReadOnlyTable<T extends object = object> extends KucBase {
  className: string;
  id: string;
  label: string;
  columns: ReadOnlyTableColumn[];
  data: T[];
  pagination: boolean;
  rowsPerPage: number;
  visible: boolean;
  constructor(props?: ReadOnlyTableProps<T>);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  render(): import("lit-html").TemplateResult<1>;
  updated(): void;
}
