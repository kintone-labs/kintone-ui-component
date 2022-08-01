import { expect, fixture } from "@open-wc/testing";
import { MobileDatePicker } from "../index";

describe("MobileDatePicker", () => {
  describe("visible", () => {
    it("should see that on screen when initializing without props option", async () => {
      const container = new MobileDatePicker({});
      const el = await fixture(container);
      expect(el).not.has.attribute("hidden");
    });

    it("should not see that on screen when initializing disabled value is false", async () => {
      const container = new MobileDatePicker({
        visible: false,
      });
      const el = await fixture(container);
      expect(el).has.attribute("hidden");
    });

    it("should see that on screen when changing by setter", async () => {
      const container = new MobileDatePicker({
        visible: false,
      });
      container.visible = true;
      const el = await fixture(container);
      expect(el).not.has.attribute("hidden");
    });

    it("should not see that on screen when changing by setter", async () => {
      const container = new MobileDatePicker({
        visible: true,
      });
      container.visible = false;
      const el = await fixture(container);
      expect(el).has.attribute("hidden");
    });
  });
});
