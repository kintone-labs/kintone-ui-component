import {
  expect,
  fixture,
  elementUpdated,
  triggerBlurFor
} from "@open-wc/testing";
import { Dropdown } from "../index";

describe("Dropdown", () => {
  describe("render", () => {
    it("should render successfully when initializing constructor without props", async () => {
      const container = new Dropdown();
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

  it("should show/hide menu element when clicking toggle button", async () => {
    const container = new Dropdown();
    const el = await fixture(container);
    const toggle = el.querySelector(
      ".kuc-dropdown__group__toggle"
    ) as HTMLDivElement;
    const menuEl = el.querySelector(
      ".kuc-dropdown__group__select-menu"
    ) as HTMLDivElement;

    toggle.click();
    await elementUpdated(container);
    expect(menuEl).not.has.attribute("hidden");

    await triggerBlurFor(toggle);
    expect(menuEl).has.attribute("hidden");

    toggle.click();
    await elementUpdated(container);
    expect(menuEl).not.has.attribute("hidden");
  });
});
