import { LitElement } from "lit-element";
import { v4 as uuid } from "uuid";

type CustomEventDetail = {
  value?: string[];
  oldValue?: string[];
};

export abstract class KucBase extends LitElement {
  public createRenderRoot() {
    return this;
  }
  public dispatchCustomEvent(eventName: string, detail?: CustomEventDetail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });
    return this.dispatchEvent(event);
  }
}

export { CustomEventDetail };
export const generateGUID = () => uuid();
