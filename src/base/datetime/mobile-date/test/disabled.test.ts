import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDate", () => {
  describe("disabled", () => {
    it("should not set disabled when not assigning ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should set disabled when assigning ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("disabled", "true");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should set disabled when changed to true by setter ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      const el = await fixture(container);
      container.setAttribute("disabled", "true");
      await elementUpdated(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should not set disabled when changed to false by setter ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("disabled", "true");

      const el = await fixture(container);
      container.removeAttribute("disabled");
      await elementUpdated(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
