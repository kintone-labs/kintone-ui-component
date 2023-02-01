import { expect, fixture } from "@open-wc/testing";

import { Attachment } from "../index";

describe("Attachment", () => {
  describe("render", () => {
    it('should have "KUC-ATTACHMENT" tag name when not assigning any prop in constructor', async () => {
      const container = new Attachment({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-ATTACHMENT");
    });
  });
});
