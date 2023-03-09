import { expect, fixture } from "@open-wc/testing";

import { Attachment } from "../index";

describe("Attachment", () => {
  describe("message", () => {
    it("should be displayed when assigned on constructor", async () => {
      const container = new Attachment({
        message: "(Max: 1GB)",
        language: "ja",
      });
      const el = await fixture(container);
      const messageEl = el.querySelector(
        ".kuc-attachment__group__files__browse-message"
      );
      expect((messageEl as HTMLParagraphElement).innerText).to.equal(
        "(Max: 1GB)"
      );
    });

    it("should not be displayed when not assigned on constructor", async () => {
      const container = new Attachment({});
      const el = await fixture(container);
      const messageEl = el.querySelector(
        ".kuc-attachment__group__files__browse-message"
      ) as HTMLParagraphElement;
      expect(messageEl.hasAttribute("hidden")).to.equal(true);
    });

    it('should be display "(Max: 2GB)" when changed to "(Max: 2GB)" by setter', async () => {
      const container = new Attachment({
        message: "(Max: 1GB)",
        language: "ja",
      });
      container.message = "(Max: 2GB)";
      const el = await fixture(container);
      const messageEl = el.querySelector(
        ".kuc-attachment__group__files__browse-message"
      );
      expect((messageEl as HTMLParagraphElement).innerText).to.equal(
        "(Max: 2GB)"
      );
    });
  });
});
