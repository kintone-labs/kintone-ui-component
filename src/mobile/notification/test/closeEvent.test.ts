import { elementUpdated, expect } from "@open-wc/testing";

import { MobileNotification } from "../index";

describe("MobileNotification", () => {
  describe("closeEvent", () => {
    it("should be triggered when close MobileNotification", async () => {
      let triggeredEvent: any = null;
      const container = new MobileNotification();
      container.addEventListener("close", (event: any) => {
        triggeredEvent = event;
      });

      container.open();
      await elementUpdated(container);

      container.close();
      await elementUpdated(container);

      expect(triggeredEvent.type).to.equal("close");
    });
  });
});
