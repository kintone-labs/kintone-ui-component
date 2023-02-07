import { elementUpdated, expect } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("title", () => {
    it("should be empty string when not assgined on constructor", async () => {
      const container = new Dialog();
      container.open();
      await elementUpdated(container);

      const titleEl = container.querySelector(
        ".kuc-dialog__dialog__header__title"
      ) as HTMLSpanElement;
      expect(titleEl.innerText).to.equal("");
    });

    it('should be "title" when assgined on constructor', async () => {
      const container = new Dialog({ title: "title" });
      container.open();
      await elementUpdated(container);

      const titleEl = container.querySelector(
        ".kuc-dialog__dialog__header__title"
      ) as HTMLSpanElement;
      expect(titleEl.innerText).to.equal("title");
    });

    it('should be "title" when updated by setter', async () => {
      const container = new Dialog();
      container.open();

      container.title = "title";
      await elementUpdated(container);

      const titleEl = container.querySelector(
        ".kuc-dialog__dialog__header__title"
      ) as HTMLSpanElement;
      expect(titleEl.innerText).to.equal("title");
    });

    it('should be replaced to "replaced title" when updated by setter', async () => {
      const container = new Dialog({ title: "title" });
      container.open();

      container.title = "replaced title";
      await elementUpdated(container);

      const titleEl = container.querySelector(
        ".kuc-dialog__dialog__header__title"
      ) as HTMLSpanElement;
      expect(titleEl.innerText).to.equal("replaced title");
    });
  });
});
