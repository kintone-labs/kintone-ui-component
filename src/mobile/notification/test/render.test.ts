import { expect, fixture } from "@open-wc/testing";
import { MobileNotification } from "../index";

describe("Render successfully without props", () => {
  const container = new MobileNotification();
  it('have "kuc-mobile-notification"', async () => {
    const el = await fixture(container);
    const tagname = el.tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-mobile-notification");
  });
});
