import { PropertyValues } from "lit";
import { KucBase } from "../../../kuc-base";
import "../../calendar/header/dropdown/year";
import "../../calendar/header/dropdown/month";
// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
export declare class BaseDateTimeCalendarHeader extends KucBase {
  language: string;
  month: number;
  year: number;
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
}
