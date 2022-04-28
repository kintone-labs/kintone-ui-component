import { PropertyValues } from "lit";
import { BaseDateTimeCalendar } from "../calendar";
import { KucBase } from "../../kuc-base";
export { BaseDateTimeCalendar };
// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
export declare class BaseDate extends KucBase {
  inputAriaLabel: string;
  inputId: string;
  language: string;
  value?: string | undefined;
  disabled: boolean;
  inputAriaInvalid: boolean;
  required: boolean;
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): void;
}
