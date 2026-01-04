import {
  expect,
  fixture,
  triggerBlurFor,
  triggerFocusFor,
} from "@open-wc/testing";

import { Switch } from "../index";

describe("Switch", () => {
  describe("accessibility", () => {
    it("can be focused and blurred", async () => {
      const container = new Switch();

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-switch__group__switch__input",
      ) as HTMLInputElement;
      await triggerFocusFor(inputEl);
      expect(document.activeElement?.className).to.equal(
        "kuc-switch__group__switch__input",
      );

      await triggerBlurFor(inputEl);
      expect(document.activeElement?.className).to.not.equal(
        "kuc-switch__group__switch__input",
      );
    });

    it("cannot be focused when disabled", async () => {
      const container = new Switch({ disabled: true });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-switch__group__switch__input",
      ) as HTMLInputElement;

      await triggerFocusFor(inputEl);
      expect(document.activeElement?.className).to.not.equal(
        "kuc-switch__group__switch__input",
      );
    });
  });
});
