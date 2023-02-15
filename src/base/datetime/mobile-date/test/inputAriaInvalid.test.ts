import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDate", () => {
  describe("inputAriaInvalid", () => {
    it("should false when not assigned", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-invalid")).to.equal("false");
    });

    it("should true when assigned", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("inputAriaInvalid", "true");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-invalid")).to.equal("true");
    });

    it("should false when changed by setter ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("inputAriaInvalid", "true");
      const el = await fixture(container);
      container.removeAttribute("inputAriaInvalid");
      await elementUpdated(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-invalid")).to.equal("false");
    });
  });
});
