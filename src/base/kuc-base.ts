import { LitElement } from "lit-element";
import { v4 as uuid } from "uuid";

type CustomEventDetail = {
  value?: string | string[];
  oldValue?: string | string[];
};

export abstract class KucBase extends LitElement {
  public createRenderRoot() {
    return this;
  }
}

export const dispatchCustomEvent = (
  el: HTMLElement,
  eventName: string,
  detail?: CustomEventDetail
) => {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true,
    composed: true
  });
  return el.dispatchEvent(event);
};

export { CustomEventDetail };
export const generateGUID = () => uuid();
