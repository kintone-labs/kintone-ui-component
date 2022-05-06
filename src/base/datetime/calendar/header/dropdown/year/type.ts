/* eslint-disable kuc-v1/super-update */
import { PropertyValues } from "lit";
import { KucBase } from "../../../../../kuc-base";
export declare class BaseDateTimeHeaderYear extends KucBase {
  year: number;
  postfix: string;
  constructor();
  connectedCallback(): void;
  disconnectedCallback(): void;
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): Promise<void>;
  closeListBox(): void;
}
