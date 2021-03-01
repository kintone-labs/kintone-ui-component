import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Dialog } from "../index";

describe("close method successfully", () => {
  const container = new Dialog();
  container.open();

  it("close method successfully", async () => {
    const el = await fixture(container);
    container.close();
    await elementUpdated(el);
    const bodyel = document.querySelector("BODY");
    await expect(bodyel!.querySelector("kuc-dialog")).to.not.be.null;
    await expect(el.hasAttribute("opened")).to.be.equal(false);
  });
});
