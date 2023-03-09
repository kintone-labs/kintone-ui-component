import { expect, fixture } from "@open-wc/testing";

import { Attachment } from "../index";

describe("Attachment", () => {
  describe("message", () => {
    it("should be displayed when message assigned on constructor", async () => {
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
  });
});
