import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("Dropdown", () => {
  describe("render", () => {
    it("should render successfully when initializing constructor without props", async () => {
      const container = new Dropdown();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-DROPDOWN");
    });
  });

  it("should render successfully when initializing constructor with full props", async () => {
    const container = new Dropdown({
      label: "Fruit",
      requiredIcon: false,
      items: [
        { label: "orange", value: "Orange" },
        { label: "apple", value: "Apple" },
      ],
      value: "Orange",
      error: "Error occurred!",
      className: "options-class",
      id: "options-id",
      visible: true,
      disabled: false,
    });

    const el = await fixture(container);
    // TODO:
    // Add expectation
  });
});
