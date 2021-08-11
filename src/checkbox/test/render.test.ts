import { expect, fixture } from "@open-wc/testing";
import { Checkbox } from "../index";

describe("render successfully without props", () => {
  const container = new Checkbox();
  it("have 'kuc-checkbox'", async () => {
    const el = await fixture(container);
    const tagname = el.tagName;
    await expect(tagname.toLowerCase()).to.be.equal("kuc-checkbox");
  });
});
