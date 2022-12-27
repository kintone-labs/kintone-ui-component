import { expect, fixture } from "@open-wc/testing";

import { MobileNotification } from "../index";

describe("Notification", () => {
  describe("text", () => {
    it("should be null when not assigning on constructor", async () => {
      const container = new MobileNotification();
      container.open();
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-mobile-notification__notification__title"
      ) as HTMLButtonElement;
      expect(textEl.innerText).to.equal("");
    });

    it("should be 'Error occurred!' when assigning on constructor", async () => {
      const container = new MobileNotification({ text: "Error occurred!" });
      container.open();
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-mobile-notification__notification__title"
      ) as HTMLButtonElement;
      expect(textEl.innerText).to.equal("Error occurred!");
    });

    it("should be replaced by 'Error occurred!' when changed by setter", async () => {
      const container = new MobileNotification({ text: "Nothing occurred!" });
      container.open();
      container.text = "Error occurred!";
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-mobile-notification__notification__title"
      ) as HTMLButtonElement;
      expect(textEl.innerText).to.equal("Error occurred!");
    });
  });
});
