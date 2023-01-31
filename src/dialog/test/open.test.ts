import { expect } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("open", () => {
    it("should be display when call open() method", async () => {
      const container = new Dialog();
      container.open();

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");

      expect(container.hasAttribute("opened")).to.equal(true);
      expect(parrentEl.classList.contains("kuc--has-dialog")).to.equal(true);
    });
  });
});
