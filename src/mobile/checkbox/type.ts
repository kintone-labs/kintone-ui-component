import { PropertyValues } from "lit";
import { KucBase } from "../../base/kuc-base";

export declare type MobileCheckboxProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  borderVisible?: boolean;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
  value?: string[];
  selectedIndex?: number[];
};

export declare type Item = {
  label?: string;
  value?: string;
};

export declare type ValueMapping = {
  [key: number]: string;
};

// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
export declare class MobileCheckbox extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  borderVisible: boolean;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: Item[];
  selectedIndex: number[];
  value: string[];
  constructor(props?: MobileCheckboxProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
