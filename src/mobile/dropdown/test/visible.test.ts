import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("visible", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ];

    it("should see that on screen when initializing without props option", async () => {
      const container = new MobileDropdown({
        items: initItems,
      });
      const el = await fixture(container);
      expect(el).not.has.attribute("hidden");
    });

    it("should not see that on screen when initializing disabled value is false", async () => {
      const container = new MobileDropdown({
        items: initItems,
        visible: false,
      });
      const el = await fixture(container);
      expect(el).has.attribute("hidden");
    });

    it("should see that on screen when changing by setter", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        visible: false,
      });
      container.visible = true;
      const el = await fixture(container);
      expect(el).not.has.attribute("hidden");
    });

    it("should not see that on screen when changing by setter", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        visible: true,
        className: "visible_test",
      });
      container.visible = false;
      const el = await fixture(container);
      expect(el).has.attribute("hidden");
    });
  });
});
