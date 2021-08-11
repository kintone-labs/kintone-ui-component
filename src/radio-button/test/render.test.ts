import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

describe("render successfully without props", () => {
  const container = new RadioButton();
  it("have 'kuc-radio-button'", async () => {
    const el = await fixture(container);
    const tagname = el.tagName;
    await expect(tagname.toLowerCase()).to.be.equal("kuc-radio-button");
  });
});
