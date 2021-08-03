import { expect, elementUpdated } from "@open-wc/testing";
import { Dialog } from "../index";

describe("Dialog", () => {
  describe("close", () => {
    it("should be hidden when call close() method", async () => {
      const container = new Dialog();
      container.open();

      container.close();
      expect(container.hasAttribute("opened")).to.equal(false);
    });
  });
});
