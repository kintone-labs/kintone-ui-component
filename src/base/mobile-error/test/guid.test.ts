import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../index";

describe("BaseMobileError", () => {
  describe("guid", () => {
    it("should be null when not assigned", async () => {
      const container = document.createElement("kuc-base-mobile-error");
      const el = await fixture(container);

      const textEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLSpanElement;
      expect(textEl.id).to.equal("-error");
    });

    it("should be add guid to id when assigned", async () => {
      const container = document.createElement("kuc-base-mobile-error");
      container.setAttribute("guid", "guid");
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLSpanElement;
      expect(textEl.id).to.equal("guid-error");
    });

    it("should be change id to 'replace-guid' when changed by setter", async () => {
      const container = document.createElement("kuc-base-mobile-error");
      container.setAttribute("guid", "guid");
      const el = await fixture(container);
      container.setAttribute("guid", "replace-guid");
      await elementUpdated(el);
      const textEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLSpanElement;
      expect(textEl.id).to.equal("replace-guid-error");
    });
  });
});
