import { KucBase } from "../../base/kuc-base";

export declare type MobileNotificationProps = {
  className?: string;
  id?: string;
  text?: string;
  content?: string | HTMLElement;
  duration?: number;
  container?: HTMLElement;
};

export declare class MobileNotification extends KucBase {
  className: string;
  id: string;
  text: string;
  content: string | HTMLElement;
  duration: number;
  container: HTMLElement;
  constructor(props?: MobileNotificationProps);
  open(): void;
  close(): void;
  render(): import("lit").TemplateResult<1>;
}
