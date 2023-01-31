import { expect } from "@open-wc/testing";

import { Spinner } from "../index";

describe("Spinner", () => {
  describe("close", () => {
    it("should be hidden when call close() method", async () => {
      const container = new Spinner({});
      container.open();

      container.close();

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl).to.equal(null);
    });
  });
});
