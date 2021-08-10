import { expect, fixture } from "@open-wc/testing";
import { MobileNotification } from "../index";

describe("MobileNotification", () => {
  describe("render", () => {
    const container = new MobileNotification({});
    it('should have "KUC-MOBILE-NOTIFICATION" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-NOTIFICATION");
    });
  });
});
