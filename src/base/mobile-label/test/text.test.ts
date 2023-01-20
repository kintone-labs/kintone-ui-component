import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileLabel", () => {
  describe("text", () => {
    it("should be null when not assigned", async () => {
      const container = document.createElement("kuc-base-mobile-label");
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLButtonElement;
      expect(textEl.innerText).to.equal("");
    });

    it("should be 'text' when assigned", async () => {
      const container = document.createElement("kuc-base-mobile-label");
      container.setAttribute("text", "text");
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLButtonElement;
      expect(textEl.innerText).to.equal("text");
    });

    it("should be replaced by 'update' when changed by setter", async () => {
      const container = document.createElement("kuc-base-mobile-label");
      container.setAttribute("text", "text");
      const el = await fixture(container);
      container.setAttribute("text", "update");
      await elementUpdated(el);
      const textEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLButtonElement;
      expect(textEl.innerText).to.equal("update");
    });
  });
});
