import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type Column = {
  field?: string;
  title?: string;
  visible?: boolean;
};

export declare type ReadOnlyTableProps = {
  className?: string;
  id?: string;
  label?: string;
  columns?: Column[];
  data?: object[];
  pagination?: boolean;
  rowsPerPage?: number;
  visible?: boolean;
};

export declare class ReadOnlyTable extends KucBase {
  className: string;
  id: string;
  label: string;
  columns: Column[];
  data: object[];
  pagination: boolean;
  rowsPerPage: number;
  visible: boolean;
  constructor(props?: ReadOnlyTableProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  render(): import("lit-html").TemplateResult<1>;
  updated(): void;
}
