import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("className", () => {
    it("should be empty when not assigning on constructor", async () => {
      const container = new Dialog();
      container.open();
      await elementUpdated(container);

      const el = await fixture(container);
      await expect(el.classList.length).to.equal(0);
    });

    it("should be 'options-class' when assigning on constructor", async () => {
      const container = new Dialog({ className: "options-class" });
      container.open();
      await elementUpdated(container);

      const el = await fixture(container);
      await expect(el.classList.length).to.equal(1);
      await expect(el.className).to.equal("options-class");
    });

    it("should be replaced by 'replace-class' when changed by setter", async () => {
      const container = new Dialog({ className: "options-class" });
      container.open();
      await elementUpdated(container);

      container.className = "replace-class";
      const el = await fixture(container);
      await expect(el.classList.length).to.equal(1);
      await expect(el.className).to.equal("replace-class");
    });
  });
});
