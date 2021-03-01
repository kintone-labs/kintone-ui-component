import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Notification } from "../index";

describe("open method successfully", () => {
  const container = new Notification();

  it("open method successfully", async () => {
    const el = await fixture(container);
    container.open();
    await elementUpdated(el);
    const bodyel = document.querySelector("BODY");
    await expect(bodyel!.querySelector("kuc-notification")).to.not.be.null;
    await expect(
      ["kuc-notification-fadein", "kuc-notification-fadeout"].every(c =>
        el.classList.contains(c)
      )
    ).to.be.false;
  });
});
