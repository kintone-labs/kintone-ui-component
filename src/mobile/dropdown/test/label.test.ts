import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("label", () => {
    it("It visible when initializing without props option", async () => {
      const container = new MobileDropdown({});
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-mobile-dropdown__label__text"
      ) as HTMLSpanElement;
      await expect(labelEl).to.be.visible;
    });

    it('It should be equal "options-label" when initializing label with "options-label"', async () => {
      const container = new MobileDropdown({ label: "options-label" });
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-mobile-dropdown__label__text"
      ) as HTMLSpanElement;
      await expect(labelEl.innerText).to.have.equal("options-label");
    });

    it('It should be replace by "replace-label" when changing by setter', async () => {
      const container = new MobileDropdown({
        label: "options-label"
      });
      container.label = "replace-label";
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-mobile-dropdown__label__text"
      ) as HTMLSpanElement;
      await expect(labelEl.textContent).to.have.equal("replace-label");
    });

    it("It visible when initializing lable value is null", async () => {
      const container = new MobileDropdown({
        // @ts-ignore
        label: null
      });
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-mobile-dropdown__label__text"
      ) as HTMLSpanElement;
      await expect(labelEl).to.be.visible;
    });

    it("It visible when changing by setter is null", async () => {
      const container = new MobileDropdown({
        label: "options-label"
      });
      // @ts-ignore
      container.label = null;
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-mobile-dropdown__label__text"
      ) as HTMLSpanElement;
      await expect(labelEl).to.be.visible;
    });
  });
});
