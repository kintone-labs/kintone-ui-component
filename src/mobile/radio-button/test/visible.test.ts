import { expect, fixture } from "@open-wc/testing";

import { MobileRadioButton } from "../index";

describe("MobileRadioButton", () => {
  describe("visible", () => {
    it("should be display inline-block when not assigned in constructor", async () => {
      const container = new MobileRadioButton({});

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(false);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("inline-block");
    });

    it("should be display none when assigned false in constructor", async () => {
      const container = new MobileRadioButton({ visible: false });

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(true);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("none");
    });

    it("should be display inline-block when changed to true by setter", async () => {
      const container = new MobileRadioButton({ visible: false });
      container.visible = true;

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(false);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("inline-block");
    });

    it("should be display none when changed to false by setter", async () => {
      const container = new MobileRadioButton({ visible: true });
      container.visible = false;

      const el = await fixture(container);
      expect(el.hasAttribute("hidden")).to.equal(true);

      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.display).to.equal("none");
    });
  });
});
