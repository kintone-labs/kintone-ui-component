import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { MobileNotification } from "../index";

describe("close method successfully", () => {
  const container = new MobileNotification();
  container.open();

  it("close method successfully", async () => {
    const el = await fixture(container);
    container.close();
    await elementUpdated(el);
    const bodyEl = document.querySelector("BODY");
    await expect(bodyEl!.querySelector("kuc-mobile-notification")).to.not.be
      .null;
    await expect(el.classList.contains("kuc-mobile-notification-fadeout")).to.be
      .true;
  });
});
