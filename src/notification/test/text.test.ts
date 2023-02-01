import { expect, fixture } from "@open-wc/testing";

import { Notification } from "../index";

describe("Notification", () => {
  describe("text", () => {
    it("should be null when not assigning on constructor", async () => {
      const container = new Notification();
      container.open();
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-notification__notification__title"
      ) as HTMLButtonElement;
      expect(textEl.innerText).to.equal("");
    });

    it("should be 'Error occurred!' when assigning on constructor", async () => {
      const container = new Notification({ text: "Error occurred!" });
      container.open();
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-notification__notification__title"
      ) as HTMLButtonElement;
      expect(textEl.innerText).to.equal("Error occurred!");
    });

    it("should be replaced by 'Error occurred!' when changed by setter", async () => {
      const container = new Notification({ text: "Nothing occurred!" });
      container.open();
      container.text = "Error occurred!";
      const el = await fixture(container);
      const textEl = el.querySelector(
        ".kuc-notification__notification__title"
      ) as HTMLButtonElement;
      expect(textEl.innerText).to.equal("Error occurred!");
    });
  });
});
