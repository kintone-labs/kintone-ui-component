import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("Render successfully without props", () => {
  const container = new TextArea();
  it('have "kuc-textarea"', async () => {
    const el = await fixture(container);
    const tagname = (await el).tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-textarea");
  });
});
