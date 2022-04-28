import { PropertyValues } from "lit";
import { KucBase } from "../../../kuc-base";
// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
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
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): void;
}
