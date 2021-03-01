import { expect, fixture } from "@open-wc/testing";
import { Dialog } from "../index";

describe("Render successfully without props", () => {
  const container = new Dialog();
  it('have "kuc-dialog"', async () => {
    const el = await fixture(container);
    const tagname = el.tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-dialog");
  });
});
