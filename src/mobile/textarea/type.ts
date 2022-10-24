import { KucBase } from "../../base/kuc-base";

export declare type MobileTextAreaEventDetail = {
  data?: string | null;
  oldValue?: string | undefined;
  value: string | undefined;
};

export declare type MobileTextAreaProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};

export declare class MobileTextArea extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  constructor(props?: MobileTextAreaProps);
  render(): import("lit").TemplateResult<1>;
}
