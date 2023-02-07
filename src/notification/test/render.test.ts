import { expect } from "@open-wc/testing";

import { Notification } from "../index";

describe("Notification", () => {
  describe("render", () => {
    it('should have "KUC-NOTIFICATION" tag name when not assigning any prop in constructor', async () => {
      const container = new Notification({});
      expect(container.tagName).to.equal("KUC-NOTIFICATION");
    });
  });
});
