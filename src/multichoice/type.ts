import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type MultiChoiceItem = {
  label?: string;
  value?: string;
};

export declare type MultiChoiceProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string[];
  selectedIndex?: number[];
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: MultiChoiceItem[];
};

export declare class MultiChoice extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: MultiChoiceItem[];
  selectedIndex: number[];
  value: string[];
  constructor(props?: MultiChoiceProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
}
