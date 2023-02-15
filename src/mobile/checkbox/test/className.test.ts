import { expect, fixture } from "@open-wc/testing";

import { MobileCheckbox } from "../index";

describe("MobileCheckbox", () => {
  describe("className", () => {
    it("should be empty when not assigning on constructor", async () => {
      const container = new MobileCheckbox();
      const el = await fixture(container);
      expect(el.classList.length).to.equal(0);
    });

    it("should be 'options-class' when assigning on constructor", async () => {
      const container = new MobileCheckbox({ className: "options-class" });
      const el = await fixture(container);
      expect(el.classList.length).to.equal(1);
      expect(el.className).to.equal("options-class");
    });

    it("should be replaced by 'replace-class' when changed by setter", async () => {
      const container = new MobileCheckbox({ className: "options-class" });
      container.className = "replace-class";
      const el = await fixture(container);
      expect(el.classList.length).to.equal(1);
      expect(el.className).to.equal("replace-class");
    });
  });
});
