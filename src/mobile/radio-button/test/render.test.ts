import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

describe("render successfully without props", () => {
  const container = new MobileRadioButton();
  it("have 'kuc-mobile-radio-button'", async () => {
    const el = await fixture(container);
    const tagname = el.tagName;
    await expect(tagname.toLowerCase()).to.be.equal("kuc-mobile-radio-button");
  });
});
