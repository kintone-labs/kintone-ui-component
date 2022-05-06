/* eslint-disable kuc-v1/super-update */
import { PropertyValues } from "lit";
import { KucBase } from "../../kuc-base";
import "./header";
import "./body";
import "./footer";
export declare class BaseDateTimeCalendar extends KucBase {
  language: string;
  value: string;
  _month: number;
  _year: number;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): Promise<void>;
}
