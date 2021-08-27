import { html, property } from "lit-element";
import { expect, fixture } from "@open-wc/testing";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../kuc-base";

describe("Base", () => {
  describe("KucBase", () => {
    it("should be return GUID when calling generateGUID function", async () => {
      const pattern =
        "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$";
      const guid = generateGUID();
      const regex = new RegExp(pattern, "i");
      expect(regex.test(guid)).to.equal(true);
    });

    it("render the template into the main DOM when component extend from KucBase uses createRenderRoot", async () => {
      const conatiner = new KucTest({ value: "MyTest" });
      const el = await fixture(conatiner);
      expect(el.hasChildNodes()).to.equal(true);
    });

    it("function change event run successfully when uses dispatchCustomEvent extend from KucBase", async () => {
      let triggeredEvent: any = null;
      const container = new KucTest({ value: "Orange" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(".kuc-test") as HTMLInputElement;
      inputEl.value = "Apple";
      inputEl.dispatchEvent(new CustomEvent("change"));

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldValue).to.equal("Orange");
      expect(triggeredEvent.detail.value).to.equal("Apple");
    });
  });
});

type KucTestProps = {
  value: string;
};
class KucTest extends KucBase {
  @property({ type: String }) value = "";
  constructor(props?: KucTestProps) {
    super();
    this.value = props?.value ? props.value : this.value;
  }
  private _handleChangeInput(event: MouseEvent) {
    event.stopPropagation();

    const targetEl = event.target as HTMLInputElement;
    const detail: CustomEventDetail = { value: "", oldValue: this.value };
    this.value = targetEl.value;
    detail.value = this.value;
    dispatchCustomEvent(this, "change", detail);
  }

  render() {
    return html`
      <input
        class="kuc-test"
        type="button"
        @change="${this._handleChangeInput}"
        value="${this.value}"
      />
    `;
  }
}
if (!window.customElements.get("kuc-test")) {
  window.customElements.define("kuc-test", KucTest);
}
