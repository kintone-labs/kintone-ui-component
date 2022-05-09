import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";
import "../base/datetime/time";

export declare type TimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};
export declare class TimePicker extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  value?: string | undefined;
  disabled: boolean;
  hour12: boolean;
  requiredIcon: boolean;
  visible: boolean;
  constructor(props?: TimePickerProps);
  protected shouldUpdate(_changedProperties: PropertyValues): boolean;
  willUpdate(_changedProperties: PropertyValues): void;
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
