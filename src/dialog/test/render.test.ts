import { expect, fixture } from "@open-wc/testing";
import { Dialog } from "../index";

describe("Dialog", () => {
  describe("render", () => {
    it('should be "kuc-dialog" when not assigned any props', async () => {
      const container = new Dialog();
      const el = await fixture(container);
      const tagname = el.tagName;
      expect(tagname.toLowerCase()).to.equal("kuc-dialog");
    });
  });
});
