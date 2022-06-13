import { KucBase } from "../base/kuc-base";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
export { BaseError, BaseLabel };

export declare type TextAreaProps = {
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

export declare class TextArea extends KucBase {
  className: string;
  error: string;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  requiredIcon: boolean;
  visible: boolean;
  render(): import("lit").TemplateResult<1>;
  firstUpdated(): void;
}
