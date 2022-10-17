import { LitElement } from "lit";
import { v4 as uuid } from "uuid";
import { FileItem } from "../attachment/type";

type CustomEventDetail = {
  data?: any;
  type?: string;
  oldValue?: string | string[];
  value?: string | string[];
  error?: string;
};
type AttachmentEventDetail = {
  files?: FileItem[];
  oldFiles?: FileItem[];
  fileIndex?: number[];
  type?: string;
};

export abstract class KucBase extends LitElement {
  public createRenderRoot() {
    return this;
  }
}

export const dispatchCustomEvent = (
  el: HTMLElement,
  eventName: string,
  detail?: CustomEventDetail | AttachmentEventDetail
) => {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true,
    composed: true,
  });
  return el.dispatchEvent(event);
};

export const createStyleOnHeader = (styleText: string) => {
  const styleTag = document.createElement("style") as HTMLStyleElement;
  styleTag.appendChild(document.createTextNode(styleText));
  document.head.appendChild(styleTag);
};

export { CustomEventDetail };
export const generateGUID = () => uuid();
