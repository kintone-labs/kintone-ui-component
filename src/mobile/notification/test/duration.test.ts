import { aTimeout, elementUpdated, expect } from "@open-wc/testing";

import { MobileNotification } from "../index";

describe("MobileNotification", () => {
  describe("duration", () => {
    it("should not auto close when not assigning on constructor", async () => {
      const container = new MobileNotification();
      container.open();
      await elementUpdated(container);

      await aTimeout(1000);
      expect(container.classList.length).to.equal(1);
      expect(container.classList[0]).to.equal("kuc-mobile-notification-fadein");
    });

    it("should auto close after 1000ms when assigning on constructor", async () => {
      const container = new MobileNotification({ duration: 1000 });
      container.open();
      await elementUpdated(container);

      expect(container.classList.length).to.equal(1);
      expect(container.classList[0]).to.equal("kuc-mobile-notification-fadein");

      await aTimeout(1000);
      expect(container.classList.length).to.equal(1);
      expect(container.classList[0]).to.equal(
        "kuc-mobile-notification-fadeout"
      );
    });

    it("should auto close after 1000ms when assigning by setter", async () => {
      const container = new MobileNotification();
      container.duration = 1000;
      container.open();
      await elementUpdated(container);

      expect(container.classList.length).to.equal(1);
      expect(container.classList[0]).to.equal("kuc-mobile-notification-fadein");

      await aTimeout(1000);
      expect(container.classList.length).to.equal(1);
      expect(container.classList[0]).to.equal(
        "kuc-mobile-notification-fadeout"
      );
    });
  });
});
