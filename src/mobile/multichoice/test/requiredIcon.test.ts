import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("requiredIcon", () => {
    it("appear when initializing without props option", async () => {
      const container = new MobileMultiChoice({});
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).has.attribute("hidden");
    });

    it("appear when initializing requiredIcon value is true", async () => {
      const container = new MobileMultiChoice({ requiredIcon: true });
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).not.has.attribute("hidden");
    });

    it("disappear when initializing requiredIcon value is false", async () => {
      const container = new MobileMultiChoice({ requiredIcon: false });
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).has.attribute("hidden");
    });

    it("appear when changing by setter", async () => {
      const container = new MobileMultiChoice({});
      container.requiredIcon = true;
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).not.has.attribute("hidden");
    });

    it("disappear when changing by setter", async () => {
      const container = new MobileMultiChoice({});
      container.requiredIcon = false;
      const el = await fixture(container);
      const requiredEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredEl).has.attribute("hidden");
    });
  });
});
