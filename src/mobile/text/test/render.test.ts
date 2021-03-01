import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("Render successfully without props", () => {
  const container = new MobileText();
  it('have "kuc-mobile-text"', async () => {
    const el = await fixture(container);
    const tagname = (await el).tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-mobile-text");
  });
});
