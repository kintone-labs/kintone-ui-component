import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type DropdownItem = {
  label?: string;
  value?: string;
};

export declare type DropdownProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  selectedIndex?: number;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: DropdownItem[];
};

export declare class Dropdown extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  value: string;
  selectedIndex: number;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: DropdownItem[];
  constructor(props?: DropdownProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  firstUpdated(): void;
  updated(): Promise<void>;
}
