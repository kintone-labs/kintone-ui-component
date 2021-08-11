import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("Render successfully without props", () => {
  const container = new MobileButton({});
  it('have "kuc-mobile-button"', async () => {
    const el = await fixture(container);
    const tagname = (await el).tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-mobile-button");
  });
});
