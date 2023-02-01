import { elementUpdated, expect } from "@open-wc/testing";

import { Notification } from "../index";

describe("Notification", () => {
  describe("open", () => {
    it("should be fadein when call open() method", async () => {
      const container = new Notification();
      container.open();
      await elementUpdated(container);

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");

      expect(container.classList.length).to.equal(1);
      expect(container.classList[0]).to.equal("kuc-notification-fadein");
    });
  });
});
