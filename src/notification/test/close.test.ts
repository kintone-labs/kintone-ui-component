import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Notification } from "../index";

describe("close method successfully", () => {
  const container = new Notification();
  container.open();

  it("close method successfully", async () => {
    const el = await fixture(container);
    container.close();
    await elementUpdated(el);
    const bodyEl = document.querySelector("BODY");
    await expect(bodyEl!.querySelector("kuc-notification")).to.not.be.null;
    await expect(el.classList.contains("kuc-notification-fadeout")).to.be.true;
  });
});
