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

export abstract class KucBase extends LitElement {
  private _initProps: any;

  constructor(props?: any) {
    super();
    if (!props || typeof props !== "object") return;
    this._initProps = props;
  }

  private _setProps<Type>(props: Type) {
    const validProps = { ...props };

    // for (const _propName in validProps) {
    //   if (!Object.prototype.hasOwnProperty.call(validProps, _propName)) {
    //     continue;
    //   }

    //   if (validProps[_propName] === undefined) {
    //     delete validProps[_propName];
    //   }
    // }
    Object.assign(this, validProps);
  }

  firstUpdated() {
    this._setProps(this._initProps);
  }

  createRenderRoot() {
    return this;
  }
}
