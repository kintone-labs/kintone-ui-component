import { expect, fixture } from "@open-wc/testing";

import { Notification } from "../index";

describe("Notification", () => {
  describe("content", () => {
    it("should be value of text when not assigned on constructor", async () => {
      const container = new Notification({ text: "text" });
      container.open();
      const el = await fixture(container);
      const titleEl = el.querySelector(
        ".kuc-notification__notification__title",
      ) as HTMLPreElement;
      await expect(titleEl.innerText).to.equal("text");
    });

    it('should be "content" when assigned string on constructor', async () => {
      const container = new Notification({ content: "content" });
      container.open();
      const el = await fixture(container);
      const titleEl = el.querySelector(
        ".kuc-notification__notification__title",
      ) as HTMLPreElement;
      await expect(titleEl.innerText).to.equal("content");
    });

    it("should be HTMLElement when assigned HTMLElement on constructor", async () => {
      const htmlElement = document.createElement("div");
      htmlElement.className = "kuc-element-class";

      const container = new Notification({ content: htmlElement });
      container.open();
      const el = await fixture(container);
      const titleEl = el.querySelector(
        ".kuc-notification__notification__title",
      ) as HTMLPreElement;

      await expect(titleEl.firstElementChild?.className).to.equal(
        "kuc-notification__notification__title--html",
      );
      await expect(
        titleEl.firstElementChild?.firstElementChild?.className,
      ).to.equal("kuc-element-class");
    });

    it("should be HTMLElement when assigned html string on constructor", async () => {
      const htmlString = `<div class="kuc-element-class">content</div>`;
      const container = new Notification({ content: htmlString });
      container.open();
      const el = await fixture(container);

      const titleEl = el.querySelector(
        ".kuc-notification__notification__title",
      ) as HTMLPreElement;
      await expect(titleEl.firstElementChild?.className).to.equal(
        "kuc-notification__notification__title--html",
      );
      await expect(
        titleEl.firstElementChild?.firstElementChild?.outerHTML.trim(),
      ).to.equal(htmlString);
    });

    it('should be "content" when set string by setter', async () => {
      const container = new Notification();
      container.content = "content";
      container.open();
      const el = await fixture(container);
      const titleEl = el.querySelector(
        ".kuc-notification__notification__title",
      ) as HTMLPreElement;
      await expect(titleEl.innerText).to.equal("content");
    });

    it("should be HTMLElement when set HTMLElement by setter", async () => {
      const htmlElement = document.createElement("div");
      htmlElement.className = "kuc-element-class";
      const container = new Notification();
      container.content = htmlElement;
      container.open();
      const el = await fixture(container);
      const titleEl = el.querySelector(
        ".kuc-notification__notification__title",
      ) as HTMLPreElement;

      await expect(titleEl.firstElementChild?.className).to.equal(
        "kuc-notification__notification__title--html",
      );
      await expect(
        titleEl.firstElementChild?.firstElementChild?.className,
      ).to.equal("kuc-element-class");
    });

    it("should be HTMLElement when set html string by setter", async () => {
      const htmlString = `<div class="kuc-element-class">content</div>`;
      const container = new Notification();
      container.content = htmlString;

      container.open();
      const el = await fixture(container);
      const titleEl = el.querySelector(
        ".kuc-notification__notification__title",
      ) as HTMLPreElement;
      await expect(titleEl.firstElementChild?.className).to.equal(
        "kuc-notification__notification__title--html",
      );
      await expect(
        titleEl.firstElementChild?.firstElementChild?.outerHTML.trim(),
      ).to.equal(htmlString);
    });
  });
});
