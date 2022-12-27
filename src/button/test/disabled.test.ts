import { expect, fixture } from "@open-wc/testing";

import { Button } from "../index";

describe("Button", () => {
  describe("disabled", () => {
    it("should not be added into button element when not set in constructor", async () => {
      const container = new Button();
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into button element when set to true in constructor", async () => {
      const container = new Button({ disabled: true });
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into button element when changed to true by setter", async () => {
      const container = new Button({ disabled: false });
      container.disabled = true;
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should not be added into button element when changed to false by setter", async () => {
      const container = new Button({ disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
