import { expect, fixture } from "@open-wc/testing";
import { MobileNotification } from "../index";

describe("MobileNotification", () => {
  describe("render", () => {
    it('should have "KUC-MOBILE-NOTIFICATION" tag name when not assigning any prop in constructor', async () => {
      const container = new MobileNotification({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-NOTIFICATION");
    });
  });
});
