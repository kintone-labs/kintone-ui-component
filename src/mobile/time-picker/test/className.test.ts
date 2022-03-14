import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { MobileTimePicker } from "../index";

describe("MobileTimePicker", () => {
  describe("className", () => {
    it("should be empty when not assigning on constructor", async () => {
      const container = new MobileTimePicker();
      const el = await fixture(container);
      expect(el.classList.length).to.equal(0);
    });

    it("should be 'options-class' when assigning on constructor", async () => {
      const container = new MobileTimePicker({ className: "options-class" });
      const el = await fixture(container);
      expect(el.classList.length).to.equal(1);
      expect(el.className).to.equal("options-class");
    });

    it("should be replaced by 'replace-class' when changed by setter", async () => {
      const container = new MobileTimePicker({ className: "options-class" });
      const el = await fixture(container);
      container.className = "replace-class";
      await elementUpdated(container);
      expect(el.classList.length).to.equal(1);
      expect(el.className).to.equal("replace-class");
    });
  });
});
