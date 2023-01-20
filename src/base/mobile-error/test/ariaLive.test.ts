import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileError", () => {
  describe("ariaLive", () => {
    it("should be dont set 'aria-live' when not assigned", async () => {
      const container = document.createElement("kuc-base-mobile-error");
      const el = await fixture(container);

      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.hasAttribute("aria-live")).to.equal(false);
    });

    it("should be set 'aria-live' when assigned", async () => {
      const container = document.createElement("kuc-base-mobile-error");
      container.setAttribute("ariaLive", "assertive");
      const el = await fixture(container);

      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.hasAttribute("aria-live")).to.equal(true);
      expect(errorEl.getAttribute("aria-live")).to.equal("assertive");
    });

    it("should be change 'aria-live' value when changed by setter", async () => {
      const container = document.createElement("kuc-base-mobile-error");
      container.setAttribute("ariaLive", "assertive");
      const el = await fixture(container);
      container.setAttribute("ariaLive", "assertive-update");
      await elementUpdated(el);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.hasAttribute("aria-live")).to.equal(true);
      expect(errorEl.getAttribute("aria-live")).to.equal("assertive-update");
    });

    it("should be dont set 'aria-live' when changed by setter", async () => {
      const container = document.createElement("kuc-base-mobile-error");
      container.setAttribute("ariaLive", "assertive");
      const el = await fixture(container);
      container.removeAttribute("ariaLive");
      await elementUpdated(el);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.hasAttribute("aria-live")).to.equal(false);
    });
  });
});
