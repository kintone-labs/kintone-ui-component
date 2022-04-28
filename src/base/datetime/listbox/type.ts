import { KucBase } from "../../kuc-base";
export declare type Item = {
  label?: string;
  value?: string;
};
// eslint-disable-next-line kuc-v1/no-describe-style-tag-inside-html
export declare class BaseDateTimeListBox extends KucBase {
  value: string;
  items: Item[];
  maxHeight: number;
  doFocus: boolean;
  constructor();
  connectedCallback(): void;
  disconnectedCallback(): void;
  getHighlightItemEl(): HTMLLIElement;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: any): void;
}
