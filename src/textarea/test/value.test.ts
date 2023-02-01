import { expect, fixture } from "@open-wc/testing";

import { TextArea } from "../index";

describe("TextArea", () => {
  describe("value", () => {
    it("should be empty string when not assigned on constructor", async () => {
      const container = new TextArea();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("");
    });

    it('should be "Apple" when  assigned "Apple" on constructor', async () => {
      const container = new TextArea({ value: "Apple" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("Apple");
    });

    it('should be "Apple" when  set "Apple" by setter', async () => {
      const container = new TextArea();
      container.value = "Apple";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("Apple");
    });

    it('should be changed to "Orange" when  set "Orange" by setter', async () => {
      const container = new TextArea({ value: "Apple" });
      container.value = "Orange";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("Orange");
    });

    it("should be empty string when assigned null on constructor", async () => {
      // @ts-ignore
      const container = new TextArea({ value: null });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("");
    });

    it("should be empty string when set null by setter", async () => {
      const container = new TextArea({ value: "Apple" });
      // @ts-ignore
      container.value = null;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("");
    });
  });
});
