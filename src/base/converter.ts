import { noChange, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export const visiblePropConverter = {
  fromAttribute(value: string | null) {
    return value === null;
  },
  toAttribute(value: boolean) {
    return value ? null : "";
  }
};

export const dialogPropsConverter = (element: string | HTMLElement) => {
  return element instanceof HTMLElement ? element : unsafeHTML(element);
};
