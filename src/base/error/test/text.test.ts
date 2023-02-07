import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseError", () => {
  describe("text", () => {
    it("should be null when not assigned", async () => {
      const container = document.createElement("kuc-base-error");
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      expect(textEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be 'text' when assigned", async () => {
      const container = document.createElement("kuc-base-error");
      container.setAttribute("text", "text");
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      expect(textEl.innerText).to.equal("text");
    });

    it("should be replaced by 'update' when changed by setter", async () => {
      const container = document.createElement("kuc-base-error");
      container.setAttribute("text", "text");
      const el = await fixture(container);
      container.setAttribute("text", "update");
      await elementUpdated(el);
      const textEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      expect(textEl.innerText).to.equal("update");
    });
  });
});
