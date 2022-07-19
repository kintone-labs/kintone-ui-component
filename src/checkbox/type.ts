import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type CheckBoxItem = { label?: string; value?: string };
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
  items?: CheckBoxItem[];
  value?: string[];
  selectedIndex?: number[];
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
  items: CheckBoxItem[];
  selectedIndex: number[];
  value: string[];
  constructor(props?: CheckboxProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
