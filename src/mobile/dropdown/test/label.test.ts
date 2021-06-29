import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("label", () => {
    it("label default prop is null", async () => {
      const container = new MobileDropdown({});
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-mobile-dropdown__label__text"
      ) as HTMLSpanElement;
      await expect(labelEl).to.be.visible;
    });

    it("label prop set successfully", async () => {
      const container = new MobileDropdown({ label: "options-label" });
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-mobile-dropdown__label__text"
      ) as HTMLSpanElement;
      await expect(labelEl.innerText).to.have.equal("options-label");
    });

    it("label prop replace successfully", async () => {
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

    it("label default prop set to null", async () => {
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

    it("label prop set to null", async () => {
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
