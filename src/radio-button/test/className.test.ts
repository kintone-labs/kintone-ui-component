import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

describe("RadioButton", () => {
  describe("className", () => {
    it("should be empty when not assigning on constructor", async () => {
      const container = new RadioButton();
      const el = await fixture(container);
      expect(el.classList.length).to.equal(0);
    });

    it("should be 'options-class' when assigning on constructor", async () => {
      const container = new RadioButton({ className: "options-class" });
      const el = await fixture(container);
      expect(el.classList.length).to.equal(1);
      expect(el.className).to.equal("options-class");
    });

    it("should be replaced by 'replace-class' when changed by setter", async () => {
      const container = new RadioButton({ className: "options-class" });
      container.className = "replace-class";
      const el = await fixture(container);
      expect(el.classList.length).to.equal(1);
      expect(el.className).to.equal("replace-class");
    });
  });
});
