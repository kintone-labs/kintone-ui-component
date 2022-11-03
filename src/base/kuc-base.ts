import { LitElement } from "lit";
import { v4 as uuid } from "uuid";
import { FileItem } from "../attachment/type";

/**
 * This type is only used in base components
 */
type CustomEventDetail = {
  error?: string;
  oldValue?: string;
  value?: string;
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

/**
 * Common function to dispatch custom event.
 * This is used in all components.
 * @param el        Event target, the type is HTMLElement
 * @param eventName Event name, the type is string
 * @param detail    The detail property of event, the type declaration means any object
 */
export const dispatchCustomEvent = (
  el: HTMLElement,
  eventName: string,
  detail?: { [p: string]: any }
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
