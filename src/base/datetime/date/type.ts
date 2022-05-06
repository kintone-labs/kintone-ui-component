/* eslint-disable kuc-v1/super-update */
import { PropertyValues } from "lit";
import { BaseDateTimeCalendar } from "../calendar";
import { KucBase } from "../../kuc-base";
export { BaseDateTimeCalendar };
export declare class BaseDate extends KucBase {
  inputAriaLabel: string;
  inputId: string;
  language: string;
  value?: string | undefined;
  disabled: boolean;
  inputAriaInvalid: boolean;
  required: boolean;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): void;
}
