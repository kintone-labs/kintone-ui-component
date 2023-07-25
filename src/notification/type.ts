import { KucBase } from "../base/kuc-base";

export declare type NotificationProps = {
  className?: string;
  text?: string;
  type?: "info" | "danger" | "success";
  duration?: number;
  container?: HTMLElement;
};

export declare class Notification extends KucBase {
  className: string;
  text: string;
  type: "info" | "danger" | "success";
  duration: number;
  container: HTMLElement;
  constructor(props?: NotificationProps);
  open(): void;
  close(): void;
  render(): import("lit").TemplateResult<1>;
}
