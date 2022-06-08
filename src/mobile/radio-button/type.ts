import { PropertyValues } from "lit";
import { KucBase } from "../../base/kuc-base";
import { BaseMobileLabel } from "../../base/mobile-label";
import { BaseMobileError } from "../../base/mobile-error";
export { BaseMobileLabel, BaseMobileError };
export declare type MobileRadioButtonItem = {
  label?: string;
  value?: string;
};
export declare type RadioButtonProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  selectedIndex?: number;
  borderVisible?: boolean;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: MobileRadioButtonItem[];
};
export declare class MobileRadioButton extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  value: string;
  selectedIndex: number;
  borderVisible: boolean;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: MobileRadioButtonItem[];
  constructor(props?: RadioButtonProps);
  willUpdate(changedProperties: PropertyValues): void;
  shouldUpdate(changedProperties: PropertyValues): boolean;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
