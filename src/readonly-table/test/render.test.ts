import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";

describe("render successfully without props", () => {
  const container = new ReadOnlyTable();
  it("have 'kuc-readonly-table'", async () => {
    const el = await fixture(container);
    const tagname = el.tagName;
    await expect(tagname.toLowerCase()).to.be.equal("kuc-readonly-table");
  });
});
