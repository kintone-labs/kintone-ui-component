import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";
import "../base/datetime/date";

export declare type DatePickerProps = {
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
// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
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
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
