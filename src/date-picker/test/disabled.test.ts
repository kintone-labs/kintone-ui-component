import { expect, fixture } from "@open-wc/testing";

import { DatePicker } from "../index";

describe("DatePicker", () => {
  describe("disabled", () => {
    it("should be not added into input element when not assigned", async () => {
      const container = new DatePicker();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into input element when assigned true", async () => {
      const container = new DatePicker({ disabled: true });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into input element when changed to true", async () => {
      const container = new DatePicker({ disabled: true });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be not added into input element when changed to false by setter", async () => {
      const container = new DatePicker({ disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
