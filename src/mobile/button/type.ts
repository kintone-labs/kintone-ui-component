import { KucBase } from "../../base/kuc-base";

export declare type MobileButtonProps = {
  className?: string;
  id?: string;
  text?: string;
  type?: "normal" | "submit";
  disabled?: boolean;
  visible?: boolean;
};

export declare class MobileButton extends KucBase {
  className: string;
  id: string;
  text: string;
  type: string;
  disabled: boolean;
  visible: boolean;
  constructor(props?: MobileButtonProps);
  render(): import("lit").TemplateResult<1>;
}
