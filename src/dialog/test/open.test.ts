import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Dialog } from "../index";

describe("Dialog", () => {
  describe("open", () => {
    it("should be display when call open() method", async () => {
      const container = new Dialog();
      const el = await fixture(container);
      container.open();
      await elementUpdated(el);

      const parrentEl = el.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");

      expect(el.hasAttribute("opened")).to.equal(true);
    });
  });
});
