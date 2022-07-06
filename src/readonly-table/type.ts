/* eslint-disable kuc-v1/super-update */
/* eslint-disable kuc-v1/no-describe-style-tag-inside-html */
import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";
declare type Column = {
  headerName?: string;
  visible?: boolean;
};

declare type ReadOnlyTableProps = {
  className?: string;
  id?: string;
  label?: string;
  columns?: Column[];
  data?: string[][];
  pagenation?: boolean;
  rowsPerPage?: number;
  visible?: boolean;
};

export declare class ReadOnlyTable extends KucBase {
  className: string;
  id: string;
  label: string;
  columns: Column[];
  data: string[][];
  pagenation: boolean;
  rowsPerPage: number;
  visible: boolean;
  constructor(props?: ReadOnlyTableProps);
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
