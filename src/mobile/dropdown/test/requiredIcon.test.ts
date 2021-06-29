import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("requiredIcon", () => {
    it("requiredIcon default prop is false", async () => {
      const container = new MobileDropdown({});
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-mobile-dropdown__label__required-icon"
      ) as HTMLSpanElement;
      await expect(requiredEl).to.be.visible;
    });

    it("requiredIcon prop set to true successfully", async () => {
      const container = new MobileDropdown({ requiredIcon: true });
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-mobile-dropdown__label__required-icon"
      ) as HTMLSpanElement;
      await expect(requiredEl.innerText).to.have.equal("*");
    });

    it("requiredIcon prop set to true successfully", async () => {
      const container = new MobileDropdown({});
      container.requiredIcon = true;
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-mobile-dropdown__label__required-icon"
      ) as HTMLSpanElement;
      await expect(requiredEl.innerText).to.have.equal("*");
    });

    it("requiredIcon prop set to false successfully", async () => {
      const container = new MobileDropdown({});
      container.requiredIcon = false;
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-mobile-dropdown__label__required-icon"
      ) as HTMLSpanElement;
      await expect(requiredEl).to.be.visible;
    });

    it("requiredIcon default prop set to null", async () => {
      // @ts-ignore
      const container = new MobileDropdown({ requiredIcon: null });
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-mobile-dropdown__label__required-icon"
      ) as HTMLSpanElement;
      await expect(requiredEl).to.be.visible;
    });

    it("requiredIcon prop set to null", async () => {
      const container = new MobileDropdown({});
      // @ts-ignore
      container.requiredIcon = null;
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-mobile-dropdown__label__required-icon"
      ) as HTMLSpanElement;
      await expect(requiredEl).to.be.visible;
    });
  });
});
