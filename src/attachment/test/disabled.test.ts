import { expect, fixture } from "@open-wc/testing";

import { Attachment } from "../index";

describe("Attachment", () => {
  describe("disabled", () => {
    it("browse button should be display none when set true in constructor", async () => {
      const container = new Attachment({ disabled: true });
      const el = await fixture(container);
      const groupEl = el.querySelector(
        ".kuc-attachment__group__files"
      ) as HTMLDivElement;
      const browseEl = groupEl.querySelector(
        ".kuc-attachment__group__files__browse-button"
      ) as HTMLDivElement;

      expect(browseEl.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(browseEl);
      expect(computedStyle.display).to.equal("none");
    });

    it("remove button should be display none when set true in constructor", async () => {
      const container = new Attachment({
        disabled: true,
        files: [{ name: "file.txt", size: "150" }],
      });
      const el = await fixture(container);
      const groupEl = el.querySelector(
        ".kuc-attachment__group__files"
      ) as HTMLDivElement;
      const removeEl = groupEl.querySelector(
        ".kuc-attachment__group__files__display-area__item__remove-button__container"
      ) as HTMLButtonElement;

      expect(removeEl.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(removeEl);
      expect(computedStyle.display).to.equal("none");
    });
  });
});
