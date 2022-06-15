import { PropertyValues } from "lit";
import { KucBase } from "../../base/kuc-base";

export declare type MobileDatePickerProps = {
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
export declare class MobileDatePicker extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  disabled: boolean;
  requiredIcon: boolean;
  language: string;
  value?: string | undefined;
  visible: boolean;
  constructor(props?: MobileDatePickerProps);
  protected shouldUpdate(
    _changedProperties: Map<string | number | symbol, unknown>
  ): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
}
