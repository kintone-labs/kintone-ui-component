/* eslint-disable kuc-v1/super-update */
import { PropertyValues } from "lit";
import { KucBase } from "../../../../../kuc-base";
// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
export declare class BaseDateTimeHeaderMonth extends KucBase {
  language: string;
  month: number;
  constructor();
  connectedCallback(): void;
  disconnectedCallback(): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): Promise<void>;
  closeListBox(): void;
}
