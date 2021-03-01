import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Dialog } from "../index";

describe("open method successfully", () => {
  const container = new Dialog();

  it("open method successfully", async () => {
    const el = await fixture(container);
    container.open();
    await elementUpdated(el);
    const bodyel = document.querySelector("BODY");
    await expect(bodyel!.querySelector("kuc-dialog")).to.not.be.null;
    await expect(el.hasAttribute("opened")).to.be.equal(true);
  });
});
