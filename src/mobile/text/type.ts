import { KucBase } from "../../base/kuc-base";
export declare type MobileTextProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  textAlign?: "left" | "right";
  value?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};
export declare class MobileText extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  placeholder: string;
  prefix: string;
  suffix: string;
  textAlign: "left" | "right";
  value: string;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  constructor(props?: MobileTextProps);
  render(): import("lit").TemplateResult<1>;
}
