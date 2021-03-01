import { expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("Render successfully without props", () => {
  const container = new Button({});
  it('have "kuc-button"', async () => {
    const el = await fixture(container);
    const tagname = (await el).tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-button");
  });
});
