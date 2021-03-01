import { expect, fixture } from "@open-wc/testing";
import { MobileCheckbox } from "../index";

describe("render successfully without props", () => {
  const container = new MobileCheckbox();
  it("have 'kuc-mobile-checkbox'", async () => {
    const el = await fixture(container);
    const tagname = el.tagName;
    await expect(tagname.toLowerCase()).to.be.equal("kuc-mobile-checkbox");
  });
});
