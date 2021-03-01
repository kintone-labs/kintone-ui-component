import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Spinner } from "../index";

describe("open method successfully", () => {
  const container = new Spinner({});

  it("open method successfully", async () => {
    const el = await fixture(container);
    container.open();
    await elementUpdated(el);
    const bodyel = document.querySelector("BODY");
    await expect(bodyel!.querySelector("kuc-spinner")).not.to.be.null;
  });
});
