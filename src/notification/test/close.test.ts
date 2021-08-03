import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Notification } from "../index";

describe("Notification", () => {
  describe("close", () => {
    it("should be fadeout when call close() method", async () => {
      const container = new Notification();
      container.open();

      container.close();

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");

      expect(container.classList.length).to.equal(1);
      expect(container.classList[0]).to.equal("kuc-notification-fadeout");
    });
  });
});
