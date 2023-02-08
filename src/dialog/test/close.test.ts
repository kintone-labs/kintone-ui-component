import { expect, fixture } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("close", () => {
    it("should be hidden when call close() method", async () => {
      const container = new Dialog();
      container.open();

      container.close();
      expect(container.hasAttribute("opened")).to.equal(false);
    });

    it("should be hidden when clicked close button", async () => {
      const container = new Dialog();
      container.open();

      const el: HTMLElement = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-dialog__dialog__header__close-button"
      ) as HTMLButtonElement;
      itemsEl.click();
      expect(container.hasAttribute("opened")).to.equal(false);
    });
  });
});
