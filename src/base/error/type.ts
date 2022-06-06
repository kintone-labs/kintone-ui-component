import { KucBase } from "../kuc-base";
export declare class BaseError extends KucBase {
  ariaLive: string;
  guid: string;
  text: string;
  render(): import("lit").TemplateResult<1>;
}
