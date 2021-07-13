import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("render successfully without props", () => {
  const container = new MobileDropdown();
  it("have 'kuc-mobile-dropdown'", async () => {
    const el = await fixture(container);
    const tagname = el.tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-mobile-dropdown");
  });
});
