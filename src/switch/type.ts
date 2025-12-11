import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type SwitchLabelPlacement = "top" | "bottom" | "left" | "right";

export declare type SwitchProps = {
  className?: string;
  id?: string;
  label?: string;
  labelPlacement?: SwitchLabelPlacement;
  textOff?: string;
  textOn?: string;
  checked?: boolean;
  disabled?: boolean;
  visible?: boolean;
};

export declare class Switch extends KucBase {
  className: string;
  id: string;
  label: string;
  labelPlacement: SwitchLabelPlacement;
  textOff: string;
  textOn: string;
  checked: boolean;
  disabled: boolean;
  visible: boolean;
  constructor(props?: SwitchProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
}
