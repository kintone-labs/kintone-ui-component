import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("MultiChoice", () => {
  describe("render", () => {
    it("should render successfully when initializing constructor without props", async () => {
      const container = new MultiChoice();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MULTI-CHOICE");
      expect(el).dom.to.equalSnapshot({
        ignoreAttributes: [
          "aria-multiselectable",
          "aria-describedby",
          "aria-labelledby",
          "id",
          "style",
          "aria-live",
          "role"
        ]
      });
    });

    it("should render successfully when initializing constructor with full props", async () => {
      const container = new MultiChoice({
        label: "Mutiple-Choice",
        requiredIcon: true,
        items: [
          {
            label: "Item 1",
            value: "item-1"
          },
          {
            label: "Item 2",
            value: "item-2"
          },
          {
            label: "Item 3",
            value: "item-3"
          },
          {
            label: "Item 4",
            value: "item-4"
          },
          {
            label: "Item 5",
            value: "item-5"
          }
        ],
        value: ["item-1", "item-3"],
        selectedIndex: [0, 2],
        error: "Error occurred!",
        className: "sample-class",
        id: "sample-id",
        visible: true,
        disabled: false
      });

      const el = await fixture(container);
      expect(el).dom.to.equalSnapshot({
        ignoreAttributes: [
          "aria-multiselectable",
          "aria-describedby",
          "aria-labelledby",
          "id",
          "style",
          "role",
          "aria-live",
          "data-index",
          "aria-checked",
          "aria-selected"
        ]
      });
    });
  });
});
