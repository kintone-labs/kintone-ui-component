import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";
export declare type DateTimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  language?: "ja" | "en" | "zh" | "auto";
  max?: string;
  min?: string;
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  timeStep?: number;
};
export declare type DateAndTime = {
  date: string;
  time: string;
};
export declare class DateTimePicker extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  language: string;
  max: string;
  min: string;
  value?: string | undefined;
  disabled: boolean;
  hour12: boolean;
  requiredIcon: boolean;
  visible: boolean;
  timeStep: number;
  constructor(props?: DateTimePickerProps);
  protected shouldUpdate(_changedProperties: PropertyValues): boolean;
  willUpdate(_changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
