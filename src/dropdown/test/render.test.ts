import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("Dropdown", () => {
  describe("render", () => {
    const container = new Dropdown();
    it("should render successfully when initializing constructor without props", async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-DROPDOWN");
      expect(el).dom.to.equalSnapshot({
        ignoreAttributes: [
          "aria-describedby",
          "aria-labelledby",
          "id",
          "aria-live",
          "type",
          "style"
        ]
      });
    });
  });

  it("should render successfully when initializing constructor with full props", async () => {
    const container = new Dropdown({
      label: "Fruit",
      requiredIcon: false,
      items: [
        {
          label: "orange",
          value: "Orange"
        },
        {
          label: "apple",
          value: "Apple"
        }
      ],
      value: "Orange",
      error: "Error occurred!",
      className: "options-class",
      id: "options-id",
      visible: true,
      disabled: false
    });

    const el = await fixture(container);
    // TODO:
    // Add expectation
  });

  it("should render successfully when showing and hiding selection list", async () => {
    const container = new Dropdown();
    const el = await fixture(container);
    const toggle = (await el.querySelector(
      ".kuc-dropdown__group__toggle"
    )) as HTMLDivElement;
    const itemsEl = (await el.querySelector(
      ".kuc-dropdown__group__select-menu"
    )) as HTMLDivElement;
    const outer = (await el.querySelector(
      ".kuc-dropdown__group__label__text"
    )) as HTMLDivElement;

    toggle.click();
    outer.click();
    expect(itemsEl).has.attribute("hidden");

    toggle.click();
    expect(itemsEl).not.has.attribute("hidden");
  });
});
