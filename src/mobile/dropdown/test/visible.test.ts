import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("disabled", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" }
    ];

    it("visible default prop is true", async () => {
      const container = new MobileDropdown({
        items: initItems
      });
      const el = await fixture(container);
      await expect(el).to.be.displayed;
    });

    it("visible prop set to false successfully", async () => {
      const container = new MobileDropdown({
        items: initItems,
        visible: false
      });
      const el = await fixture(container);
      await expect(el).not.to.be.displayed;
    });

    it("visible prop set to true successfully", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        visible: false
      });
      container.visible = true;
      const el = await fixture(container);
      await expect(el).to.be.displayed;
    });

    it("visible prop set to false successfully'", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        visible: true,
        className: "visible_test"
      });
      container.visible = false;
      const el = await fixture(container);
      await expect(el).not.to.be.displayed;
    });

    it("visible default prop set to null", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        // @ts-ignore
        visible: null
      });
      const el = await fixture(container);
      await expect(el).not.to.be.displayed;
    });

    it("visible prop set to null", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems
      });
      // @ts-ignore
      container.visible = null;
      const el = await fixture(container);
      await expect(el).not.to.be.displayed;
    });
  });
});
