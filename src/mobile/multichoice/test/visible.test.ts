import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("visible", () => {
    const initItems = [
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ];

    it("should see that on screen when initializing without props option", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
      });
      const el = await fixture(container);
      expect(el).not.has.attribute("hidden");
    });

    it("should not see that on screen when initializing visible value is false", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
        visible: false,
      });
      const el = await fixture(container);
      expect(el).has.attribute("hidden");
    });

    it("should see that on screen when changing by setter", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
        visible: false,
      });
      container.visible = true;
      const el = await fixture(container);
      expect(el).not.has.attribute("hidden");
    });

    it("should not see that on screen when changing by setter", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
        visible: true,
      });
      container.visible = false;
      const el = await fixture(container);
      expect(el).has.attribute("hidden");
    });
  });
});
