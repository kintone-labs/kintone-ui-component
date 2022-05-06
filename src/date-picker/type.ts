/* eslint-disable kuc-v1/super-update */
import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";
import "../base/datetime/date";
declare type DatePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  language?: "ja" | "en" | "zh" | "auto";
  value?: string;
};
export declare class DatePicker extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  disabled: boolean;
  requiredIcon: boolean;
  language: string;
  value?: string | undefined;
  visible: boolean;
  constructor(props?: DatePickerProps);
  protected shouldUpdate(_changedProperties: PropertyValues): boolean;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
export {};
