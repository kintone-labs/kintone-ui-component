import { KucBase } from "../../base/kuc-base";

export declare type MobileNotificationProps = {
  className?: string;
  text?: string;
  duration?: number;
};

export declare class MobileNotification extends KucBase {
  className: string;
  text: string;
  duration: number;
  constructor(props?: MobileNotificationProps);
  open(): void;
  close(): void;
  render(): import("lit").TemplateResult<1>;
}
