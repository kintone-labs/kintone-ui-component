import { PropertyValues } from "lit";

import { KucBase } from "../base/kuc-base";

export declare type TooltipPlacement = "top" | "bottom" | "left" | "right";

export declare type KeyBoardFunction = (event: KeyboardEvent) => void;

export declare type PointerFunction = (event: PointerEvent) => void;

export declare type TooltipProps = {
  className?: string;
  container?: string | HTMLElement;
  describeChild?: boolean;
  id?: string;
  placement?: TooltipPlacement;
  title?: string;
};

export declare class Tooltip extends KucBase {
  className: string;
  container: string | HTMLElement;
  describeChild: boolean;
  id: string;
  placement: TooltipPlacement;
  title: string;
  constructor(props?: TooltipProps);
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  firstUpdated(): void;
}
