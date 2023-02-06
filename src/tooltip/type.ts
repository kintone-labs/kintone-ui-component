import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type TooltipPlacement = "top" | "bottom" | "left" | "right";

export declare type KeyBoardFunction = (event: KeyboardEvent) => void;

export declare type PointerFunction = (event: PointerEvent) => void;

export declare type TooltipProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  selectedIndex?: number;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};

export declare type DropdownChangeEventDetail = {
  oldValue: string | undefined;
  value: string | undefined;
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
  constructor(props?: TooltipProps);
  shouldUpdate(changedProperties: PropertyValues): boolean;
  willUpdate(changedProperties: PropertyValues): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  firstUpdated(): void;
  updated(): Promise<void>;
}
