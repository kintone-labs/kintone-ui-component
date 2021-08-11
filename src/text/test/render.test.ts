import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Render successfully without props", () => {
  const container = new Text();
  it('have "kuc-text"', async () => {
    const el = await fixture(container);
    const tagname = (await el).tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-text");
  });
});
