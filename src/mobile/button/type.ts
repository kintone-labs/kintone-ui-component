import { KucBase } from "../../base/kuc-base";

export declare type MobileButtonProps = {
  className?: string;
  id?: string;
  text?: string;
  type?: "normal" | "submit";
  disabled?: boolean;
  visible?: boolean;
};
// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
export declare class MobileButton extends KucBase {
  className: string;
  id: string;
  text: string;
  type: string;
  disabled: boolean;
  visible: boolean;
  constructor(props?: MobileButtonProps);
  private _handleClickButton;
  private _getButtonColorType;
  render(): import("lit").TemplateResult<1>;
}
