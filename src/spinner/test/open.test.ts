import { expect } from "@open-wc/testing";

import { Spinner } from "../index";

describe("Spinner", () => {
  describe("open", () => {
    it("should be display when call open() method", async () => {
      const container = new Spinner({});
      container.open();

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");
    });
  });
});
