import { PropertyValues } from "lit";
import { KucBase } from "../../base/kuc-base";
export declare type MobileMultiChoiceItem = {
  label?: string;
  value?: string;
};
export declare type MobileMultiChoiceProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: MobileMultiChoiceItem[];
  value?: string[];
  selectedIndex?: number[];
};
export declare class MobileMultiChoice extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: MobileMultiChoiceItem[];
  selectedIndex: number[];
  value: string[];
  constructor(props?: MobileMultiChoiceProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
}
