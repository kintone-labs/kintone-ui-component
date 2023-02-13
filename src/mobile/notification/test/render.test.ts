import { expect } from "@open-wc/testing";

import { MobileNotification } from "../index";

describe("MobileNotification", () => {
  describe("render", () => {
    it('should have "KUC-MOBILE-NOTIFICATION" tag name when not assigning any prop in constructor', async () => {
      const container = new MobileNotification({});
      expect(container.tagName).to.equal("KUC-MOBILE-NOTIFICATION");
    });
  });
});
