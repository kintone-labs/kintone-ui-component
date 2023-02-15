import { elementUpdated, expect } from "@open-wc/testing";

import { Notification } from "../index";

describe("Notification", () => {
  describe("closeEvent", () => {
    it("should be triggered when close Notification", async () => {
      let triggeredEvent: any = null;
      const container = new Notification();
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
