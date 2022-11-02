import { KucBase } from "../base/kuc-base";
export declare type TextProps = {
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
export declare type TextChangeEventDetail = {
  oldValue: string | undefined;
  value: string | undefined;
};

export declare type TextInputEventDetail = {
  data: string | null;
  value: string | undefined;
};

export declare type TextFocusEventDetail = {
  value: string | undefined;
};

export declare class Text extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  placeholder: string;
  prefix: string;
  suffix: string;
  textAlign: string;
  value: string;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  constructor(props?: TextProps);
  render(): import("lit").TemplateResult<1>;
}
