import { expect, fixture, triggerFocusFor } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("accessibility", () => {
    it("can be focused first dummy", async () => {
      const container = new Dialog();
      container.open();

      const el: HTMLElement = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-dialog__first-dummy"
      ) as HTMLSpanElement;
      await triggerFocusFor(itemsEl);

      expect(document.activeElement?.className).to.equal(
        "kuc-dialog__dialog__header__close-button"
      );
    });

    it("can be focused last dummy", async () => {
      const container = new Dialog();
      container.open();

      const el: HTMLElement = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-dialog__last-dummy"
      ) as HTMLSpanElement;
      await triggerFocusFor(itemsEl);

      expect(document.activeElement?.className).to.equal("kuc-dialog__dialog");
    });

    it("should close Dialog when pressing Escape key", async () => {
      const container = new Dialog();
      container.open();

      const el: HTMLElement = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dialog__dialog"
      ) as HTMLDivElement;

      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      expect(container.hasAttribute("opened")).to.equal(false);
    });
  });
});
