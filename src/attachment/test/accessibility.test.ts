import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Attachment } from "../index";

describe("Attachment", () => {
  describe("accessibility", () => {
    it("should be defaultPrevented when click label", async () => {
      const container = new Attachment({ label: "options-label" });
      let eventDetail = new Event("click");
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-attachment__group__label"
      ) as HTMLLabelElement;
      labelEl.addEventListener("click", (event) => {
        eventDetail = event;
      });
      labelEl.dispatchEvent(new Event("click", { cancelable: true }));
      elementUpdated(el);
      expect(eventDetail.defaultPrevented).to.equal(true);
    });
  });
});
