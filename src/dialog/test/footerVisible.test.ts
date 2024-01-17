import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("footerVisible", () => {
    it("should be displayed when not assigned in constructor", async () => {
      const container = new Dialog({});
      container.open();
      await elementUpdated(container);
      const footerEl = container.querySelector(
        ".kuc-dialog__dialog__footer",
      ) as HTMLDivElement;

      await expect(footerEl.hasAttribute("hidden")).to.equal(false);

      const computedStyle = window.getComputedStyle(footerEl);
      await expect(computedStyle.display).to.equal("block");
    });

    it("should not be displayed when assigned false in constructor", async () => {
      const container = new Dialog({ footerVisible: false });
      container.open();
      await elementUpdated(container);
      const footerEl = container.querySelector(
        ".kuc-dialog__dialog__footer",
      ) as HTMLDivElement;

      await expect(footerEl.hasAttribute("hidden")).to.equal(true);

      const computedStyle = window.getComputedStyle(footerEl);
      await expect(computedStyle.display).to.equal("none");
    });

    it("should be displayed when changed to true by setter", async () => {
      const container = new Dialog({ footerVisible: false });
      container.open();

      container.footerVisible = true;
      await elementUpdated(container);
      const footerEl = container.querySelector(
        ".kuc-dialog__dialog__footer",
      ) as HTMLDivElement;

      await expect(footerEl.hasAttribute("hidden")).to.equal(false);

      const computedStyle = window.getComputedStyle(footerEl);
      await expect(computedStyle.display).to.equal("block");
    });

    it("should not be displayed when changed to false by setter", async () => {
      const container = new Dialog({ footerVisible: true });
      container.open();

      container.footerVisible = false;
      await elementUpdated(container);
      const footerEl = container.querySelector(
        ".kuc-dialog__dialog__footer",
      ) as HTMLDivElement;

      await expect(footerEl.hasAttribute("hidden")).to.equal(true);

      const computedStyle = window.getComputedStyle(footerEl);
      await expect(computedStyle.display).to.equal("none");
    });
  });
});
