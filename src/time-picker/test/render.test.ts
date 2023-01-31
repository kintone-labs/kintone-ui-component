import { expect, fixture } from "@open-wc/testing";

import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("render", () => {
    it('should have "KUC-TIME-PICKER" tag name when not assigning any prop in constructor', async () => {
      const container = new TimePicker();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-TIME-PICKER");
    });
  });
});
