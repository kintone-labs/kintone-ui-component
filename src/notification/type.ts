import { KucBase } from "../base/kuc-base";

export declare type NotificationProps = {
  className?: string;
  text?: string;
  type?: "info" | "danger" | "success";
  duration?: number;
};

// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
export declare class Notification extends KucBase {
  className: string;
  text: string;
  type: "info" | "danger" | "success";
  duration: number;
  constructor(props?: NotificationProps);
  open(): void;
  close(): void;
  render(): import("lit").TemplateResult<1>;
}
