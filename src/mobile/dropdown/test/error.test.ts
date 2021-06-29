import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("error", () => {
    it("error default prop is null", async () => {
      const container = new MobileDropdown({});
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-dropdown__error"
      ) as HTMLDivElement;
      await expect(errorEl).not.to.be.displayed;
    });

    it("error default prop set successfully", async () => {
      const container = new MobileDropdown({ error: "error-message" });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-dropdown__error"
      ) as HTMLDivElement;
      await expect(errorEl.innerText).to.have.equal("error-message");
      await expect(errorEl).to.be.displayed;
    });

    it("error prop replace successfully", async () => {
      const container = new MobileDropdown({
        error: "error-message"
      });
      container.error = "replace-error";
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-dropdown__error"
      ) as HTMLDivElement;
      await expect(errorEl.innerText).to.have.equal("replace-error");
      await expect(errorEl).to.be.displayed;
    });

    it("error default prop set to null", async () => {
      const container = new MobileDropdown({
        // @ts-ignore
        error: null
      });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-dropdown__error"
      ) as HTMLDivElement;
      await expect(errorEl).not.to.be.displayed;
    });

    it("error prop set to null", async () => {
      const container = new MobileDropdown({
        error: "error-message"
      });
      // @ts-ignore
      container.error = null;
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-dropdown__error"
      ) as HTMLDivElement;
      await expect(errorEl).not.to.be.displayed;
    });
  });
});
