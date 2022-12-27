import { expect, fixture } from "@open-wc/testing";

import { Table } from "../index";

describe("Table", () => {
  describe("label", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new Table();
      const el = await fixture(container);

      const captionEl = el.querySelector(
        ".kuc-table__table__label"
      ) as HTMLTableCaptionElement;
      expect(captionEl.hasAttribute("hidden")).to.equal(true);
    });

    it('should be display "options-label" when assigned "options-label" in constructor', async () => {
      const container = new Table({ label: "options-label" });
      const el = await fixture(container);

      const captionEl = el.querySelector(
        ".kuc-table__table__label"
      ) as HTMLLegendElement;
      expect(captionEl.hasAttribute("hidden")).to.equal(false);
      expect(captionEl.innerText).to.equal("options-label");
    });

    it('should be display "replace-label" when changed to "replace-label" by setter', async () => {
      const container = new Table({
        label: "options-label",
      });
      container.label = "replace-label";

      const el = await fixture(container);
      const captionEl = el.querySelector(
        ".kuc-table__table__label"
      ) as HTMLLegendElement;
      expect(captionEl.hasAttribute("hidden")).to.equal(false);
      expect(captionEl.innerText).to.equal("replace-label");
    });
  });
});
