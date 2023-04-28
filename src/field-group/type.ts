import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type FieldGroupProps = {
  className?: string;
  content?: string | HTMLElement;
  id?: string;
  label?: string;
  disabled?: boolean;
  expanded?: boolean;
  visible?: boolean;
};

export declare type FieldGroupChangeEventDetail = {
  expanded: boolean;
};

export declare class FieldGroup extends KucBase {
  className: string;
  content: string | HTMLElement;
  id: string;
  label: string;
  disabled: boolean;
  expanded: boolean;
  visible: boolean;
  constructor(props?: FieldGroupProps);
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  firstUpdated(): void;
}
