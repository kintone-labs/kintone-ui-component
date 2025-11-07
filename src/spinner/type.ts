import { KucBase } from "../base/kuc-base";
export declare type SpinnerProps = {
  className?: string;
  id?: string;
  text?: string;
  container?: HTMLElement;
};

export declare class Spinner extends KucBase {
  className: string;
  id: string;
  text: string;
  container: HTMLElement;
  constructor(props?: SpinnerProps);
  open(): void;
  close(): void;
  render(): import("lit").TemplateResult<1>;
}
