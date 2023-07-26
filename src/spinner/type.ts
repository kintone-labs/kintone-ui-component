import { KucBase } from "../base/kuc-base";
export declare type SpinnerProps = {
  text?: string;
  container?: HTMLElement;
};

export declare class Spinner extends KucBase {
  text: string;
  container: HTMLElement;
  constructor(props?: SpinnerProps);
  open(): void;
  close(): void;
  render(): import("lit").TemplateResult<1>;
}
