import { expect, fixture } from "@open-wc/testing";

import { TextArea } from "../index";

describe("TextArea", () => {
  describe("focusEvent", () => {
    it("should be triggered when focusing to the input", async () => {
      const container = new TextArea({ value: "Orange" });
      container.addEventListener("focus", (event: any) => {
        expect(event.detail.value).to.equal("Orange");
        container.value = "Apple";
      });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      inputEl.focus();

      expect(container.value).to.equal("Apple");
    });
  });
});
