import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { BaseDateTimeListBox } from "../index";

describe("BaseDateTimeListBox", () => {
  describe("maxHeight", () => {
    it("should be update by setter", async () => {
      const container = new BaseDateTimeListBox();
      const el = await fixture(container);
      const ul = el.querySelector("ul") as HTMLUListElement;

      container.maxHeight = 500;
      await elementUpdated(el);
      expect(ul.style.maxHeight).to.equal("500px");

      container.maxHeight = 1000;
      await elementUpdated(el);
      expect(ul.style.maxHeight).to.equal("1000px");
    });
  });
});
