import { expect, fixture } from "@open-wc/testing";
import { Notification } from "../index";

describe("Notification", () => {
  describe("render", () => {
    it('should have "KUC-NOTIFICATION" tag name when not assigning any prop in constructor', async () => {
      const container = new Notification({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-NOTIFICATION");
    });
  });
});
