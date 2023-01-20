import { expect, fixture } from "@open-wc/testing";

import { MobileDatePicker } from "../index";

describe("MobileDatePicker", () => {
  describe("requiredIcon", () => {
    it("appear when initializing without props option", async () => {
      const container = new MobileDatePicker({});
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).has.attribute("hidden");
    });

    it("appear when initializing requiredIcon value is true", async () => {
      const container = new MobileDatePicker({ requiredIcon: true });
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).not.has.attribute("hidden");
    });

    it("disappear when initializing requiredIcon value is false", async () => {
      const container = new MobileDatePicker({ requiredIcon: false });
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).has.attribute("hidden");
    });

    it("appear when changing by setter", async () => {
      const container = new MobileDatePicker({});
      container.requiredIcon = true;
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).not.has.attribute("hidden");
    });

    it("disappear when changing by setter", async () => {
      const container = new MobileDatePicker({});
      container.requiredIcon = false;
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).has.attribute("hidden");
    });
  });
});
