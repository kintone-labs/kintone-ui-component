import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("Render successfully without props", () => {
  const container = new MobileTextArea();
  it('have "kuc-mobile-textarea"', async () => {
    const el = await fixture(container);
    const tagname = (await el).tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-mobile-textarea");
  });
});
