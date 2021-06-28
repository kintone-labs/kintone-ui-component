import { fixture, expect } from "@open-wc/testing";
import { MobileNotification } from "../index";

describe("Function change event run successfully by mouse/keyboard event", async () => {
  const container = new MobileNotification();

  it("can be clicked close button", async () => {
    const el: HTMLElement = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-notification__notification__closeButton"
    ) as HTMLButtonElement;
    let isClose = false;
    container.addEventListener("click", (event: Event) => {
      isClose = container.classList.contains("kuc-mobile-notification-fadeout");
    });
    await itemsEl.click();
    await expect(isClose).to.be.true;
  });
});
