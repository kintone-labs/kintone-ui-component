import { expect, fixture } from "@open-wc/testing";
import { Notification } from "../index";

describe("Render successfully without props", () => {
  const container = new Notification();
  it('have "kuc-notification"', async () => {
    const el = await fixture(container);
    const tagname = el.tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-notification");
  });
});
