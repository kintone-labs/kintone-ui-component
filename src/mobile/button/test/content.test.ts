import { expect, fixture } from "@open-wc/testing";

import { MobileButton } from "../index";

describe("MobileButton", () => {
  describe("content", () => {
    it("should be value of text when not assigned on constructor", async () => {
      const container = new MobileButton({ text: "text" });
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button",
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("text");
    });
    it('should be "content" when assigned string on constructor', async () => {
      const container = new MobileButton({ content: "content" });
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button",
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("content");
    });
    it("should be HTMLElement when assigned HTMLElement on constructor", async () => {
      const htmlElement = document.createElement("div");
      htmlElement.className = "kuc-element-class";

      const container = new MobileButton({ content: htmlElement });
      const el = await fixture(container);

      const contentEl = el.querySelector(
        ".kuc-mobile-button__button",
      ) as HTMLDivElement;
      expect(contentEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });
    it("should be HTMLElement when assigned html string on constructor", async () => {
      const htmlString = `<div class="kuc-element-class">content</div>`;
      const container = new MobileButton({ content: htmlString });
      const el = await fixture(container);

      const contentEl = el.querySelector(
        ".kuc-mobile-button__button",
      ) as HTMLDivElement;
      expect(contentEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });
    it('should be "content" when set string by setter', async () => {
      const container = new MobileButton();
      container.content = "content";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button",
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("content");
    });
    it("should be HTMLElement when set HTMLElement by setter", async () => {
      const htmlElement = document.createElement("div");
      htmlElement.className = "kuc-element-class";
      const container = new MobileButton();
      container.content = htmlElement;
      const el = await fixture(container);
      const contentEl = el.querySelector(
        ".kuc-mobile-button__button",
      ) as HTMLDivElement;
      expect(contentEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });
    it("should be HTMLElement when set html string by setter", async () => {
      const htmlString = `<div class="kuc-element-class">content</div>`;
      const container = new MobileButton();
      container.content = htmlString;
      const el = await fixture(container);
      const contentEl = el.querySelector(
        ".kuc-mobile-button__button",
      ) as HTMLDivElement;
      expect(contentEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });
  });
});
