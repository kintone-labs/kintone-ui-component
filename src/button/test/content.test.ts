import { expect, fixture } from "@open-wc/testing";

import { Button } from "../index";

describe("Button", () => {
  describe("content", () => {
    it("should be value of text when not assigned on constructor", async () => {
      const container = new Button({ text: "text" });
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button",
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("text");
    });
    it('should be "content" when assigned string on constructor', async () => {
      const container = new Button({ content: "content" });
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button",
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("content");
    });
    it("should be HTMLElement when assigned HTMLElement on constructor", async () => {
      const htmlElement = document.createElement("div");
      htmlElement.className = "kuc-element-class";

      const container = new Button({ content: htmlElement });
      const el = await fixture(container);

      const contentEl = el.querySelector(
        ".kuc-button__button",
      ) as HTMLDivElement;
      expect(contentEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });
    it("should be HTMLElement when assigned html string on constructor", async () => {
      const htmlString = `<div class="kuc-element-class">content</div>`;
      const container = new Button({ content: htmlString });
      const el = await fixture(container);

      const contentEl = el.querySelector(
        ".kuc-button__button",
      ) as HTMLDivElement;
      expect(contentEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });
    it('should be "content" when set string by setter', async () => {
      const container = new Button();
      container.content = "content";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button",
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("content");
    });
    it("should be HTMLElement when set HTMLElement by setter", async () => {
      const htmlElement = document.createElement("div");
      htmlElement.className = "kuc-element-class";
      const container = new Button();
      container.content = htmlElement;
      const el = await fixture(container);
      const contentEl = el.querySelector(
        ".kuc-button__button",
      ) as HTMLDivElement;
      expect(contentEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });
    it("should be HTMLElement when set html string by setter", async () => {
      const htmlString = `<div class="kuc-element-class">content</div>`;
      const container = new Button();
      container.content = htmlString;
      const el = await fixture(container);
      const contentEl = el.querySelector(
        ".kuc-button__button",
      ) as HTMLDivElement;
      expect(contentEl.firstElementChild!.className).to.equal(
        "kuc-element-class",
      );
    });
  });
});
