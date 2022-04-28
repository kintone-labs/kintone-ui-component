import { PropertyValues } from "lit";
import { KucBase } from "../../kuc-base";
import "./header";
import "./body";
import "./footer";
// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
export declare class BaseDateTimeCalendar extends KucBase {
  language: string;
  value: string;
  _month: number;
  _year: number;
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): Promise<void>;
}
