import { expect, fixture } from "@open-wc/testing";
import { Notification } from "../index";

describe("Notification", () => {
  describe("render", () => {
    const container = new Notification({});
    it('should have "KUC-NOTIFICATION" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-NOTIFICATION");
    });
  });
});
