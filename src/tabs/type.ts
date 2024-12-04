import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type TabsItem = {
  label?: string;
  value: string;
  disabled?: boolean;
  visible?: boolean;
  content?: HTMLElement | string;
};

export declare type TabsProp = {
  allowScroll?: boolean;
  allowScrollButtons?: boolean;
  className?: string;
  id?: string;
  value?: string;
  borderVisible?: boolean;
  visible?: boolean;
  items?: TabsItem[];
};

export declare type TabsChangeEventDetail = {
  oldValue: string | undefined;
  value: string | undefined;
};

export declare class Tabs extends KucBase {
  allowScroll: boolean;
  allowScrollButtons: boolean;
  className: string;
  id: string;
  value: string;
  borderVisible: boolean;
  visible: boolean;
  items: TabsItem[];
  constructor(props?: TabsProp);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
}
