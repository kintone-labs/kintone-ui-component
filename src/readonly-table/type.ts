import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type Column = {
  headerName?: string;
  visible?: boolean;
};

export declare type ReadOnlyTableProps = {
  className?: string;
  id?: string;
  label?: string;
  columns?: Column[];
  data?: string[][];
  pagination?: boolean;
  rowsPerPage?: number;
  visible?: boolean;
};

export declare class ReadOnlyTable extends KucBase {
  className: string;
  id: string;
  label: string;
  columns: Column[];
  data: string[][];
  pagination: boolean;
  rowsPerPage: number;
  visible: boolean;
  constructor(props?: ReadOnlyTableProps);
  update(changedProperties: PropertyValues): void;
  render(): import("lit-html").TemplateResult<1>;
  updated(): void;
}
