import { KucBase } from "../base/kuc-base";

export declare type ButtonProps = {
  className?: string;
  id?: string;
  text?: string;
  type?: "normal" | "submit" | "alert";
  disabled?: boolean;
  visible?: boolean;
};

export declare class Button extends KucBase {
  className: string;
  id: string;
  text: string;
  type: string;
  disabled: boolean;
  visible: boolean;
  constructor(props?: ButtonProps);
  render(): import("lit").TemplateResult<1>;
}
