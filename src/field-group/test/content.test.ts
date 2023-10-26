import { expect, fixture } from "@open-wc/testing";

import { FieldGroup } from "../index";

const getContent = (content: string) => {
  const contentEl = document.createElement("span");
  contentEl.className = "field-group-content";
  contentEl.innerText = content;
  return contentEl;
};

describe("FieldGroup", () => {
  describe("content", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new FieldGroup({ content: getContent("") });
      const el = await fixture(container);

      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      expect(divContentEl.hasAttribute("hidden")).to.equal(true);

      const labelTextEl = el.querySelector(
        ".field-group-content",
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("");
    });

    it('should be display "options-content" when assigned "options-content" in constructor', async () => {
      const container = new FieldGroup({
        content: getContent("FieldGroup's content"),
      });
      const el = await fixture(container);

      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      expect(divContentEl.hasAttribute("hidden")).to.equal(true);

      const labelTextEl = el.querySelector(
        ".field-group-content",
      ) as HTMLSpanElement;
      expect(labelTextEl.innerText).to.equal("FieldGroup's content");
    });

    it('should be display "replace-content" when changed to "replace-content" by setter', async () => {
      const container = new FieldGroup({
        content: getContent("FieldGroup's content"),
      });
      container.label = getContent("replace-content");

      const el = await fixture(container);
      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      expect(divContentEl.hasAttribute("hidden")).to.equal(true);

      const labelTextEl = el.querySelector(
        ".field-group-content",
      ) as HTMLSpanElement;
      expect(labelTextEl.innerText).to.equal("replace-content");
    });
  });
});
