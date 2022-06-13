import { PropertyValues } from "lit";
import { KucBase } from "../base/kuc-base";

export declare type DialogProps = {
  icon?: "" | "info" | "success" | "error" | "warning" | "question";
  title?: string;
  content?: string | HTMLElement;
  footer?: string | HTMLElement;
};

export declare class Dialog extends KucBase {
  icon: "" | "info" | "success" | "error" | "warning" | "question";
  title: string;
  content: string | HTMLElement;
  footer: string | HTMLElement;
  constructor(props?: DialogProps);
  update(changedProperties: PropertyValues): void;
  open(): void;
  close(): void;
  render(): import("lit").TemplateResult<1>;
}
