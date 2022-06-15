import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type RadioButtonItem = {
  label?: string;
  value?: string;
};
export declare type RadioButtonProps = {
  className?: string;
  error?: string;
  id?: string;
  itemLayout?: string;
  label?: string;
  value?: string;
  selectedIndex?: number;
  borderVisible?: boolean;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: RadioButtonItem[];
};

export declare class RadioButton extends KucBase {
  className: string;
  error: string;
  id: string;
  itemLayout: string;
  label: string;
  value: string;
  selectedIndex: number;
  borderVisible: boolean;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: RadioButtonItem[];
  constructor(props?: RadioButtonProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): Promise<void>;
}
