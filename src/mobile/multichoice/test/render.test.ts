import { expect, fixture } from "@open-wc/testing";

import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("render", () => {
    it("have 'kuc-mobile-multi-choice'", async () => {
      const container = new MobileMultiChoice();
      const el = await fixture(container);
      const tagname = el.tagName;
      expect(tagname.toLowerCase()).to.be.equal("kuc-mobile-multi-choice");
    });
  });
});
