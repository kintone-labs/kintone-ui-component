import { expect, fixture } from "@open-wc/testing";

import { Switch } from "../index";

describe("Switch", () => {
  describe("checked", () => {
    it("should be false when not assigned in constructor", async () => {
      const container = new Switch();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-switch__group__switch__input",
      ) as HTMLInputElement;

      expect(inputEl.checked).to.equal(false);
    });

    it("should be true when assigned true in constructor", async () => {
      const container = new Switch({ checked: true });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-switch__group__switch__input",
      ) as HTMLInputElement;

      expect(inputEl.checked).to.equal(true);
    });

    it("should be true when changed to true by setter", async () => {
      const container = new Switch({ checked: false });
      container.checked = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-switch__group__switch__input",
      ) as HTMLInputElement;

      expect(inputEl.checked).to.equal(true);
    });

    it("should be false when changed to false by setter", async () => {
      const container = new Switch({ checked: true });
      container.checked = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-switch__group__switch__input",
      ) as HTMLInputElement;

      expect(inputEl.checked).to.equal(false);
    });
  });
});
