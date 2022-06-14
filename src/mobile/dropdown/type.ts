import { PropertyValues } from "lit";
import { KucBase } from "../../base/kuc-base";

export declare type MobileDropdownItem = {
  label?: string;
  value?: string;
};
export declare type MobileDropdownProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  selectedIndex?: number;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: MobileDropdownItem[];
};
export declare class MobileDropdown extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  value: string;
  selectedIndex: number;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: MobileDropdownItem[];
  constructor(props?: MobileDropdownProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): void;
}
