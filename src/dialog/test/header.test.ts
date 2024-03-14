import { elementUpdated, expect } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("header", () => {
    it("should be value of title when not assigned on constructor", async () => {
      const container = new Dialog({
        title: "title",
      });
      container.open();
      await elementUpdated(container);

      const headerEl = container.querySelector(
        ".kuc-dialog__dialog__header__title",
      ) as HTMLDivElement;
      expect(headerEl.childElementCount).to.equal(0);
      expect(headerEl.textContent?.trim()).to.equal("title");
    });

    it('should be "header" when assgined string on constructor', async () => {
      const container = new Dialog({ header: "header" });
      container.open();
      await elementUpdated(container);

      const headerEl = container.querySelector(
        ".kuc-dialog__dialog__header__title",
      ) as HTMLDivElement;
      expect(headerEl.textContent?.trim()).to.equal("header");
    });

    it("should be HTMLElement when assgined HTMLElement on constructor", async () => {
      const htmlElement = document.createElement("div");
      htmlElement.className = "kuc-element-class";

      const container = new Dialog({ header: htmlElement });
      container.open();
      await elementUpdated(container);

      const headerEl = container.querySelector(
        ".kuc-dialog__dialog__header__title",
      ) as HTMLDivElement;
      expect(headerEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });

    it("should be HTMLElement when assgined html string on constructor", async () => {
      const htmlString = `<div class="kuc-element-class">header</div>`;
      const container = new Dialog({ header: htmlString });
      container.open();
      await elementUpdated(container);

      const headerEl = container.querySelector(
        ".kuc-dialog__dialog__header__title",
      ) as HTMLDivElement;
      expect(headerEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });

    it('should be "header" when set string by setter', async () => {
      const container = new Dialog();
      container.open();

      container.header = "header";
      await elementUpdated(container);

      const headerEl = container.querySelector(
        ".kuc-dialog__dialog__header__title",
      ) as HTMLDivElement;
      expect(headerEl.textContent?.trim()).to.equal("header");
    });

    it("should be HTMLElement when set HTMLElement by setter", async () => {
      const htmlElement = document.createElement("div");
      htmlElement.className = "kuc-element-class";

      const container = new Dialog();
      container.open();

      container.header = htmlElement;
      await elementUpdated(container);

      const headerEl = container.querySelector(
        ".kuc-dialog__dialog__header__title",
      ) as HTMLDivElement;
      expect(headerEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });

    it("should be HTMLElement when set html string by setter", async () => {
      const htmlString = `<div class="kuc-element-class">header</div>`;
      const container = new Dialog();
      container.open();

      container.header = htmlString;
      await elementUpdated(container);

      const headerEl = container.querySelector(
        ".kuc-dialog__dialog__header__title",
      ) as HTMLDivElement;
      expect(headerEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });
  });
});
