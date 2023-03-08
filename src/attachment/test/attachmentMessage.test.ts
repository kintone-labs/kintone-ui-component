import { expect, fixture } from "@open-wc/testing";

import { Attachment } from "../index";

describe("Attachment", () => {
  describe("attachmentMessage", () => {
    it("should be displayed when attachmentMessage assinged on constructor", async () => {
      const container = new Attachment({ attachmentMessage: "(Max: 1GB)" });
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
