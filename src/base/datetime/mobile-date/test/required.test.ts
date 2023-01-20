import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDate", () => {
  describe("required", () => {
    it("should not set required when not assigned ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-required")).to.equal("false");
    });

    it("should set required when assigned ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      container.setAttribute("required", "true");

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-required")).to.equal("true");
    });

    it("should be set required when changed to true by setter ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      const el = await fixture(container);
      container.setAttribute("required", "true");
      await elementUpdated(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-required")).to.equal("true");
    });

    it("should remove required when changed to false by setter ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      container.setAttribute("required", "true");
      const el = await fixture(container);
      container.removeAttribute("required");
      await elementUpdated(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-required")).to.equal("false");
    });
  });
});
