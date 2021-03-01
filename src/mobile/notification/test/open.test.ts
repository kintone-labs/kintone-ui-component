import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { MobileNotification } from "../index";

describe("open method successfully", () => {
  const container = new MobileNotification();

  it("open method successfully", async () => {
    const el = await fixture(container);
    container.open();
    await elementUpdated(el);
    const bodyel = document.querySelector("BODY");
    await expect(bodyel!.querySelector("kuc-mobile-notification")).to.not.be
      .null;
    await expect(
      [
        "kuc-mobile-notification-fadein",
        "kuc-mobile-notification-fadeout"
      ].every(c => el.classList.contains(c))
    ).to.be.false;
  });
});
