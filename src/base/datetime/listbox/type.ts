import { KucBase } from "../../kuc-base";
export declare type Item = {
  label?: string;
  value?: string;
};
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
