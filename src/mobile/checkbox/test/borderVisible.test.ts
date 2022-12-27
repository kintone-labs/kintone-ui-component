import { expect, fixture } from "@open-wc/testing";

import { MobileCheckbox } from "../index";

describe("MobileCheckbox", () => {
  describe("borderVisible", () => {
    it("should be default(true) when not set on constructor", async () => {
      const container = new MobileCheckbox({});

      const el = await fixture(container);
      const selectMenuEl = el.querySelector(
        ".kuc-mobile-checkbox__group__select-menu"
      ) as HTMLDivElement;

      expect(selectMenuEl.hasAttribute("borderVisible")).to.equal(true);
    });
  });

  it("should be set to false if set false on constructor", async () => {
    const container = new MobileCheckbox({ borderVisible: false });

    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    ) as HTMLDivElement;

    expect(selectMenuEl.hasAttribute("borderVisible")).to.equal(false);
  });

  it("should be change to true if set true by setter", async () => {
    const container = new MobileCheckbox({ borderVisible: false });
    container.borderVisible = true;

    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    ) as HTMLDivElement;

    expect(selectMenuEl.hasAttribute("borderVisible")).to.equal(true);
  });

  it("should be change to false if set false by setter", async () => {
    const container = new MobileCheckbox({ borderVisible: true });
    container.borderVisible = false;

    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    ) as HTMLDivElement;

    expect(selectMenuEl.hasAttribute("borderVisible")).to.equal(false);
  });
});
