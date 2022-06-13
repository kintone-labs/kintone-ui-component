import { KucBase } from "../base/kuc-base";
export declare type SpinnerProps = {
  text?: string;
};

export declare class Spinner extends KucBase {
  text: string;
  constructor(props?: SpinnerProps);
  open(): void;
  close(): void;
  render(): import("lit").TemplateResult<1>;
}
