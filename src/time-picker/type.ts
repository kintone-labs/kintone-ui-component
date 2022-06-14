import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type TimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  max?: string;
  min?: string;
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  timeStep?: number;
  language?: "ja" | "en" | "zh" | "auto";
};
export declare class TimePicker extends KucBase {
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
  constructor(props?: TimePickerProps);
  protected shouldUpdate(_changedProperties: PropertyValues): boolean;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
