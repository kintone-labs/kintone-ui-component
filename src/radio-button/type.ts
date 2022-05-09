import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";
export declare type Item = {
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
  items?: Item[];
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
  items: Item[];
  constructor(props?: RadioButtonProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
