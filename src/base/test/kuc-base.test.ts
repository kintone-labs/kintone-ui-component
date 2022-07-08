import { html } from "lit";
import { expect, fixture } from "@open-wc/testing";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail,
} from "../kuc-base";

describe("KucBase", () => {
  describe("generateGUID", () => {
    it("should be return GUID when calling generateGUID function", async () => {
      const pattern =
        "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$";
      const guid = generateGUID();
      const regex = new RegExp(pattern, "i");
      expect(regex.test(guid)).to.equal(true);
    });
  });

  describe("createRenderRoot", () => {
    it("render the template into the main DOM when component extend from KucBase", async () => {
      const container = new KucTest();
      const el = await fixture(container);
      expect(el.querySelector(".kuc-test__test") !== null).to.equal(true);
    });
  });

  describe("dispatchCustomEvent", () => {
    it("function change event run successfully", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("div");
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const detail: CustomEventDetail = {
        value: "Apple",
        oldValue: "Orange",
      };
      dispatchCustomEvent(container, "change", detail);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldValue).to.equal("Orange");
      expect(triggeredEvent.detail.value).to.equal("Apple");
    });
  });
});

class KucTest extends KucBase {
  render() {
    return html` <div class="kuc-test__test"></div> `;
  }
}
if (!window.customElements.get("kuc-test")) {
  window.customElements.define("kuc-test", KucTest);
}
