import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("className", () => {
    it("className default prop is null", async () => {
      const container = new MobileDropdown();
      const el = await fixture(container);
      expect(el.classList.length).to.be.equal(0);
    });

    it("className default prop set successfully", async () => {
      const container = new MobileDropdown({ className: "options-class" });
      const el = await fixture(container);
      expect(el.classList.length).to.be.equal(1);
      expect(el.className).to.have.equal("options-class");
    });

    it("className prop replace successfully'", async () => {
      const container = new MobileDropdown({
        className: "options-class"
      });
      container.className = "replace-class";
      const el = await fixture(container);
      expect(el.classList.length).to.be.equal(1);
      expect(el.className).to.have.equal("replace-class");
    });

    it("className default prop set to null", async () => {
      // @ts-ignore
      const container = new MobileDropdown({ className: null });
      const el = await fixture(container);
      expect(el.classList.length).to.be.equal(1);
      expect(el.className).to.have.equal("null");
    });

    it("className prop set to null", async () => {
      const container = new MobileDropdown();
      // @ts-ignore
      container.className = null;
      const el = await fixture(container);
      expect(el.classList.length).to.be.equal(1);
      expect(el.className).to.have.equal("null");
    });
  });
});
