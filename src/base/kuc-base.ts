import { LitElement } from "lit-element";
import { v4 as uuid } from "uuid";

export abstract class KucBase extends LitElement {
  public createRenderRoot() {
    return this;
  }

  public _generateGUID(): string {
    return uuid();
  }
}
