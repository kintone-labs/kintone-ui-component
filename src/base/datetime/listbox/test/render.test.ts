import { expect, fixture } from "@open-wc/testing";

import { BaseDateTimeListBox } from "../index";

describe("BaseDateTimeListBox", () => {
  describe("render", () => {
    it('should have "KUC-BASE-DATETIME-LISTBOX" tag name when not assigning any prop in constructor', async () => {
      const container = new BaseDateTimeListBox();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BASE-DATETIME-LISTBOX");
    });
  });
});
