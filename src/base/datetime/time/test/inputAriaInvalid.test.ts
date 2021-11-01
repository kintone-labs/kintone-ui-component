import { expect, fixture } from "@open-wc/testing";
import { BaseDateTime } from "../index";

describe("BaseTime", () => {
  describe("inputAriaInvalid", () => {
    it("should be false when not assigning", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-invalid")).to.equal("false");
      expect(container.inputAriaInvalid).to.equal(false);
    });

    it("should be true when assigned by setter", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.inputAriaInvalid = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-invalid")).to.equal("true");
      expect(container.inputAriaInvalid).to.equal(true);
    });

    it("should be false when changed to false", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.inputAriaInvalid = true;
      container.inputAriaInvalid = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("aria-invalid")).to.equal("false");
      expect(container.inputAriaInvalid).to.equal(false);
    });
  });
});
