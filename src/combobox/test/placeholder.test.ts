import { expect, fixture } from "@open-wc/testing";

import { Combobox } from "../index";

describe("Combobox", () => {
  describe("placeholder", () => {
    it("should not display when not assigning in constructor", async () => {
      const container = new Combobox();
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input",
      ) as HTMLInputElement;
      expect(toggleInput.hasAttribute("palceholder")).to.equal(false);
    });
    it("should display when assigning in constructor", async () => {
      const container = new Combobox({ placeholder: "test" });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input",
      ) as HTMLInputElement;
      expect(toggleInput.placeholder).to.equal("test");
    });
  });
});
