import { expect, fixture } from "@open-wc/testing";

import { ReadOnlyTable } from "../index";

describe("ReadOnlyTable", () => {
  describe("label", () => {
    it("should be empty when not assigned in constructor", async () => {
      const container = new ReadOnlyTable({});

      const el = await fixture(container);
      const captionEl = el.querySelector(
        ".kuc-readonly-table___table__label"
      ) as HTMLTableCaptionElement;

      expect(captionEl).to.equal(null);
    });

    it('should be display "options-label" when assigned "options-label" in constructor', async () => {
      const container = new ReadOnlyTable({
        label: "options-label",
      });

      const el = await fixture(container);
      const captionEl = el.querySelector(
        ".kuc-readonly-table__table__label"
      ) as HTMLTableCaptionElement;

      expect(captionEl.textContent?.trim()).to.equal("options-label");
    });

    it('should be display "replace-label" when changed to "replace-label" by setter', async () => {
      const container = new ReadOnlyTable({ label: "options-label" });
      container.label = "replace-label";

      const el = await fixture(container);
      const captionEl = el.querySelector(
        ".kuc-readonly-table__table__label"
      ) as HTMLTableCaptionElement;

      expect(captionEl.textContent?.trim()).to.equal("replace-label");
    });
  });
});
