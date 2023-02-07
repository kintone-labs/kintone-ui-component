import { expect } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("render", () => {
    it('should have "KUC-DIALOG" tag name when not assigning any prop in constructor', async () => {
      const container = new Dialog({});

      expect(container.tagName).to.equal("KUC-DIALOG");
    });
  });
});
