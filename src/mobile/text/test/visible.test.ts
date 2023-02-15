import { expect, fixture } from "@open-wc/testing";

import { MobileText } from "../index";

describe("MobileText", () => {
  describe("visible", () => {
    it("should be display block when not assigned in constructor", async () => {
      const container = new MobileText();

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(false);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("block");
    });

    it("should be display none when assigned false in constructor", async () => {
      const container = new MobileText({ visible: false });

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(true);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("none");
    });

    it("should be display block when changed to true by setter", async () => {
      const container = new MobileText({ visible: false });
      container.visible = true;

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(false);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("block");
    });

    it("should be display none when changed to false by setter", async () => {
      const container = new MobileText({ visible: true });
      container.visible = false;

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(true);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("none");
    });
  });
});
