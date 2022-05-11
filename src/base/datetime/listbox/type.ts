import { KucBase } from "../../kuc-base";
export declare type ListBoxItem = {
  label?: string;
  value?: string;
};
export declare class BaseDateTimeListBox extends KucBase {
  value: string;
  items: ListBoxItem[];
  maxHeight: number;
  doFocus: boolean;
  constructor();
  connectedCallback(): void;
  disconnectedCallback(): void;
  getHighlightItemEl(): HTMLLIElement;
  render(): import("lit").TemplateResult<1>;
  updated(changedProperties: any): void;
}
