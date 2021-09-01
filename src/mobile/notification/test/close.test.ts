import { expect } from "@open-wc/testing";
import { MobileNotification } from "../index";

describe("MobileNotification", () => {
  describe("close", () => {
    it("should be fadeout when call close() method", async () => {
      const container = new MobileNotification();
      container.open();

      container.close();

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");

      expect(container.classList.length).to.equal(1);
      expect(container.classList[0]).to.equal(
        "kuc-mobile-notification-fadeout"
      );
    });

    it("should be fadeout when clicked close button", async () => {
      const container = new MobileNotification();
      container.open();

      const closeBtnEl = container.querySelector(
        ".kuc-mobile-notification__notification__closeButton"
      ) as HTMLButtonElement;
      closeBtnEl.click();

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");

      expect(container.classList.length).to.equal(1);
      expect(container.classList[0]).to.equal(
        "kuc-mobile-notification-fadeout"
      );
    });
  });
});
