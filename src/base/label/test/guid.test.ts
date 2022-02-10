import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../index";

describe("BaseLabel", () => {
  describe("guid", () => {
    it("should be null when not assigned", async () => {
      const container = document.createElement("kuc-base-label");
      const el = await fixture(container);

      const textEl = el.querySelector(
        ".kuc-base-label__text"
      ) as HTMLSpanElement;
      expect(textEl.id).to.equal("");
    });

    it("should be add guid to id when assigned", async () => {
      const container = document.createElement("kuc-base-label");
      container.setAttribute("guid", "guid");
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-base-label__text"
      ) as HTMLSpanElement;
      expect(textEl.id).to.equal("guid-group");
    });

    it("should be change id to 'replace-guid' when changed by setter", async () => {
      const container = document.createElement("kuc-base-label");
      container.setAttribute("guid", "guid");
      const el = await fixture(container);
      container.setAttribute("guid", "replace-guid");
      await elementUpdated(el);
      const textEl = el.querySelector(
        ".kuc-base-label__text"
      ) as HTMLSpanElement;
      expect(textEl.id).to.equal("replace-guid-group");
    });
  });
});
