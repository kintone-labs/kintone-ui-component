import { PropertyValues } from "lit";
import { KucBase } from "../../base/kuc-base";

export declare type MobileTimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  language?: "ja" | "en" | "zh" | "auto";
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};
export declare class MobileTimePicker extends KucBase {
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
  constructor(props?: MobileTimePickerProps);
  protected shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
