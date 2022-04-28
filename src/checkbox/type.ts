import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type CheckboxProps = {
  className?: string;
  error?: string;
  id?: string;
  itemLayout?: "horizontal" | "vertical";
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
export declare class Checkbox extends KucBase {
  className: string;
  error: string;
  id: string;
  itemLayout?: "horizontal" | "vertical";
  label: string;
  borderVisible: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: Item[];
  value: string[];
  selectedIndex?: number[];
  constructor(props?: CheckboxProps);
  shouldUpdate(_changedProperties: PropertyValues): boolean;
  willUpdate(_changedProperties: PropertyValues): void;
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
