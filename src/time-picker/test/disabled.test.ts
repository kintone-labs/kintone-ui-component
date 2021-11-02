import { expect, fixture } from "@open-wc/testing";
import { TimePicker } from "../index";

describe("Text", () => {
  describe("disabled", () => {
    it("should be not added into input element when not assigned in constructor", async () => {
      const container = new TimePicker();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into input element when assigned true in constructor", async () => {
      const container = new TimePicker({ disabled: true });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into input element when changed to true by setter", async () => {
      const container = new TimePicker({ disabled: false });
      container.disabled = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be not added into input element when changed to false by setter", async () => {
      const container = new TimePicker({ disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
