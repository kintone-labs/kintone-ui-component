import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type TooltipPlacement = "top" | "bottom" | "left" | "right";

export declare type TooltipProps = {
  className?: string;
  id?: string;
  placement?: TooltipPlacement;
  title?: string;
  container?: string | HTMLElement;
  describeChild?: boolean;
};

export declare class Tooltip extends KucBase {
  className: string;
  id: string;
  placement: TooltipPlacement;
  title: string;
  container: string | HTMLElement;
  describeChild: boolean;
  constructor(props?: TooltipProps);
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(): void;
}
