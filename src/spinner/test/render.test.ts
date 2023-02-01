import { expect } from "@open-wc/testing";

import { Spinner } from "../index";

describe("Spinner", () => {
  describe("render", () => {
    it('should have "KUC-SPINNER" tag name when not assigning any prop in constructor', async () => {
      const container = new Spinner({});
      expect(container.tagName).to.equal("KUC-SPINNER");
    });
  });
});
