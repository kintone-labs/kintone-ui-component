import { expect, fixture } from "@open-wc/testing";
import { MobileDatePicker } from "../index";

describe("MobileDatePicker", () => {
  describe("className", () => {
    it("should be set to empty string when initializing without props option", async () => {
      const container = new MobileDatePicker();
      const el = await fixture(container);
      expect(el.classList.length).to.be.equal(0);
    });

    it('should be equal "options-class" string when initializing className with "options-class" value', async () => {
      const container = new MobileDatePicker({ className: "options-class" });
      const el = await fixture(container);
      expect(el.classList.length).to.be.equal(1);
      expect(el.className).to.have.equal("options-class");
    });

    it('should be replace by "replace-class" when changing by setter', async () => {
      const container = new MobileDatePicker({
        className: "options-class",
      });
      container.className = "replace-class";
      const el = await fixture(container);
      expect(el.classList.length).to.be.equal(1);
      expect(el.className).to.have.equal("replace-class");
    });
  });
});
