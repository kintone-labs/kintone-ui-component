import { expect, fixture } from "@open-wc/testing";
import { Spinner } from "../index";

describe("Render successfully without props", () => {
  const container = new Spinner({});
  container.open();
  it('have "kuc-spinner"', async () => {
    const el = await fixture(container);
    const tagname = (await el).tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-spinner");
  });
});
