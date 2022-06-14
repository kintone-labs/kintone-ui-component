import { PropertyValues } from "lit";
import { KucBase } from "../../base/kuc-base";

export declare type MobileRadioButtonItem = {
  label?: string;
  value?: string;
};
export declare type MobileRadioButtonProps = {
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
  constructor(props?: MobileRadioButtonProps);
  willUpdate(changedProperties: PropertyValues): void;
  shouldUpdate(changedProperties: PropertyValues): boolean;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
