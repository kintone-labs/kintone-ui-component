import { LitElement, html } from "lit-element";

type CustomEventDetail = {
  value: string;
  oldValue?: string;
};

export function dispatchCustomEvent(
  el: HTMLElement,
  eventName: string,
  detail?: CustomEventDetail
) {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true,
    composed: true
  });
  return el.dispatchEvent(event);
}

export function validateProps<Type>(props: Type) {
  const validProps = { ...props };

  for (const _propName in validProps) {
    if (!Object.prototype.hasOwnProperty.call(validProps, _propName)) {
      continue;
    }

    if (validProps[_propName] === undefined) {
      delete validProps[_propName];
    }
  }

  return validProps;
}

export abstract class KucBase extends LitElement {
  createRenderRoot() {
    return this;
  }
}
