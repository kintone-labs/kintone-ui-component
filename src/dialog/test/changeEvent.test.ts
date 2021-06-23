import { fixture, triggerFocusFor, expect } from "@open-wc/testing";
import { Dialog } from "../index";

describe("Function change event run successfully by mouse/keyboard event", async () => {
  const container = new Dialog();
  container.open();
  it("can be focused first dummy", async () => {
    const el: HTMLElement = await fixture(container);
    const closeBtn = el.querySelector(
      ".kuc-dialog__dialog__header__close-button"
    ) as HTMLButtonElement;
    const itemsEl = el.querySelector(
      ".kuc-dialog__first-dummy"
    ) as HTMLSpanElement;
    await triggerFocusFor(itemsEl);
    await expect(document.activeElement?.isSameNode(closeBtn)).to.be.true;
  });

  it("can be focused last dummy", async () => {
    const el: HTMLElement = await fixture(container);
    const dialog = el.querySelector(".kuc-dialog__dialog") as HTMLDivElement;
    const itemsEl = el.querySelector(
      ".kuc-dialog__last-dummy"
    ) as HTMLSpanElement;
    await triggerFocusFor(itemsEl);
    await expect(document.activeElement?.isSameNode(dialog)).to.be.true;
  });

  it("can be clicked close button", async () => {
    const el: HTMLElement = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-dialog__dialog__header__close-button"
    ) as HTMLButtonElement;
    container.addEventListener("click", () => {
      container.classList.add("onclick");
    });
    await itemsEl.click();
    await expect(container.classList.contains("onclick")).to.be.true;
  });
});
