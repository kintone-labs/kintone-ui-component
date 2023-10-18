import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type CheckboxItem = {
  label?: string;
  value?: string;
  disabled?: boolean;
};

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
  items?: CheckboxItem[];
  value?: string[];
  selectedIndex?: number[];
};
export declare type CheckboxChangeEventDetail = {
  oldValue: string[] | undefined;
  value: string[] | undefined;
};

export declare class Checkbox extends KucBase {
  className: string;
  error: string;
  id: string;
  itemLayout: "horizontal" | "vertical";
  label: string;
  borderVisible: boolean;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: CheckboxItem[];
  selectedIndex: number[];
  value: string[];
  constructor(props?: CheckboxProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
