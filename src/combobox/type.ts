import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type ComboboxChangeEventDetail = {
  oldValue?: string;
  value?: string;
};

export declare type ComboboxItem = {
  label?: string;
  value?: string;
  disabled?: boolean;
};

export declare type ComboboxProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: ComboboxItem[];
};

export declare class Combobox extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: ComboboxItem[];
  constructor(props?: ComboboxProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  firstUpdated(): void;
  updated(): Promise<void>;
}
