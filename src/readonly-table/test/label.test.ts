import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";

const data = [
  {
    index: "1",
    name: "Tokyo",
    country: "Japan",
    population: "14,000,000",
  },
  {
    index: "2",
    name: "Ho Chi Minh",
    country: "Vietnam",
    population: "9,000,000",
  },
];

const columns = [
  {
    headerName: "Number",
    field: "index",
  },
  {
    headerName: "City",
    field: "name",
  },
];

describe("ReadOnlyTable", () => {
  describe("label", () => {
    it("should be empty when not assigned in constructor", async () => {
      const container = new ReadOnlyTable({ columns: columns, data: data });
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-readonly-table___table__label"
      ) as HTMLLegendElement;
      expect(labelEl).to.equal(null);
    });

    it('should be display "options-label" when assigned "options-label" in constructor', async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        label: "options-label",
      });

      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-readonly-table__table__label"
      ) as HTMLLegendElement;

      expect(labelEl.textContent?.trim()).to.equal("options-label");
    });

    it('should be display "replace-label" when changed to "replace-label" by setter', async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        label: "options-label",
      });

      container.label = "replace-label";

      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-readonly-table__table__label"
      ) as HTMLLegendElement;

      expect(labelEl.textContent?.trim()).to.equal("replace-label");
    });
  });
});
