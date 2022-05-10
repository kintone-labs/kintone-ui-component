/* eslint-disable kuc-v1/super-update */
import { PropertyValues } from "lit";
import { KucBase } from "../../../kuc-base";
export declare class BaseDateTimeCalendarBody extends KucBase {
  month: number;
  year: number;
  language: string;
  value: string;
  _month: number;
  _year: number;
  constructor();
  connectedCallback(): void;
  disconnectedCallback(): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): void;
}
