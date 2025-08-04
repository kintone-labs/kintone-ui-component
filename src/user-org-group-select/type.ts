import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type UserOrgGroupSelectChangeEventDetail = {
  oldValue: string[];
  value: string[];
};
export declare type UserOrgGroupSelectClickIconEventDetail = {
  value: string[];
};
export declare type UserOrgGroupSelectItem = {
  label?: string;
  value?: string;
  disabled?: boolean;
  type?: "" | "user" | "org" | "group";
};

export declare type UserOrgGroupSelectProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string[];
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: UserOrgGroupSelectItem[];
  icon?: "" | "user" | "org" | "group";
};

export declare class UserOrgGroupSelect extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  placeholder: string;
  value: string[];
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  items: UserOrgGroupSelectItem[];
  icon: "" | "user" | "org" | "group";
  constructor(props?: UserOrgGroupSelectProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  firstUpdated(): void;
  updated(): Promise<void>;
}
