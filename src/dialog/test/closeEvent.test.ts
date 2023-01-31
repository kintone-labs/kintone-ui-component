import { expect } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("closeEvent", () => {
    it("should be triggered when close Dialog", async () => {
      let triggeredEvent: any = null;
      const container = new Dialog();
      container.addEventListener("close", (event: any) => {
        triggeredEvent = event;
      });

      container.open();
      container.close();

      expect(triggeredEvent.type).to.equal("close");
    });
  });
});
