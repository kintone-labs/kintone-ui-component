import { PropertyValues } from "lit";
import { KucBase } from "../../base/kuc-base";

export declare type MobileCheckboxItem = { label?: string; value?: string };

export declare type MobileCheckboxProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  borderVisible?: boolean;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: MobileCheckboxItem[];
  value?: string[];
  selectedIndex?: number[];
};

export declare class MobileCheckbox extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  borderVisible: boolean;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: MobileCheckboxItem[];
  selectedIndex: number[];
  value: string[];
  constructor(props?: MobileCheckboxProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
