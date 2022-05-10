/* eslint-disable kuc-v1/super-update */
import { PropertyValues } from "lit";
import { KucBase } from "../../../kuc-base";
import "../../calendar/header/dropdown/year";
import "../../calendar/header/dropdown/month";
export declare class BaseDateTimeCalendarHeader extends KucBase {
  language: string;
  month: number;
  year: number;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
}
