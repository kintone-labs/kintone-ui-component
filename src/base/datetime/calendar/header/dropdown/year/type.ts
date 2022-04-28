import { PropertyValues } from "lit";
import { KucBase } from "../../../../../kuc-base";
// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
export declare class BaseDateTimeHeaderYear extends KucBase {
  year: number;
  postfix: string;
  constructor();
  connectedCallback(): void;
  disconnectedCallback(): void;
  // eslint-disable-next-line kuc-v1/super-update
  update(changedProperties: PropertyValues): void;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: PropertyValues): Promise<void>;
  closeListBox(): void;
}
