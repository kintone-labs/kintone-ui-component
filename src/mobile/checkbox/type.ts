import { PropertyValues } from "lit";
import { KucBase } from "../../base/kuc-base";

export declare type MobileCheckboxItem = { label?: string; value?: string };
export declare type MobileCheckboxValueMapping = { [key: number]: string };

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
  items: MobileCheckboxItem[];
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
