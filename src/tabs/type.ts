import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type TabsItem = {
  content?: HTMLElement | string;
  disabled?: boolean;
  label?: string;
  visible?: boolean;
  value: string;
};

export declare type TabsProp = {
  borderVisible: boolean;
  className?: string;
  id?: string;
  items: TabsItem[];
  value?: string;
  visible?: boolean;
};

export declare type TabsChangeEventDetail = {
  oldValue: string | undefined;
  value: string | undefined;
};

export declare class Tabs extends KucBase {
  className: string;
  id: string;
  items: TabsItem[];
  value?: string | undefined;
  visible: boolean;
  constructor(props?: TabsProp);
  protected shouldUpdate(_changedProperties: PropertyValues): boolean;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
