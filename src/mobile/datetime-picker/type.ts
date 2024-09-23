import { PropertyValues } from "lit";

import { KucBase } from "../../base/kuc-base";

export declare type MobileDateTimePickerChangeEventDetail = {
  oldValue: string | undefined;
  value: string | undefined;
  changedPart: string;
};

export declare type MobileDateTimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  language?: "ja" | "en" | "zh" | "zh-TW" | "es" | "auto";
  value?: string;
};
export declare class MobileDateTimePicker extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  language: string;
  value?: string | undefined;
  disabled: boolean;
  hour12: boolean;
  requiredIcon: boolean;
  visible: boolean;
  constructor(props?: MobileDateTimePickerProps);
  protected shouldUpdate(_changedProperties: PropertyValues): boolean;
  willUpdate(_changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
