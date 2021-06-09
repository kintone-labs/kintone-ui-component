import { fixture, triggerFocusFor } from "@open-wc/testing";
import { Dialog } from "../index";

describe("Function change event run successfully by mouse/keyboard event", async () => {
  const container = new Dialog();
  container.open();
  it("can be focused first dummy", async () => {
    const el: HTMLElement = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-dialog__first-dummy"
    ) as HTMLSpanElement;
    await triggerFocusFor(itemsEl);
  });

  it("can be focused first dummy", async () => {
    const el: HTMLElement = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-dialog__last-dummy"
    ) as HTMLSpanElement;
    await triggerFocusFor(itemsEl);
  });

  it("can be clicked close button", async () => {
    const el: HTMLElement = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-dialog__dialog__header__close-button"
    ) as HTMLButtonElement;
    itemsEl.click();
  });
});
