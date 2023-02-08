import { expect, fixture } from "@open-wc/testing";

import { RadioButton } from "../index";

describe("RadioButton", () => {
  describe("itemLayout", () => {
    it("should be horizontal when not assigned in constructor", async () => {
      const container = new RadioButton();
      const el = await fixture(container);
      const selectMenuEl = el.querySelector(
        ".kuc-radio-button__group__select-menu"
      ) as HTMLDivElement;

      expect(selectMenuEl.getAttribute("itemLayout")).to.equal("horizontal");
    });

    it("should be vertical when assigned vertical in constructor", async () => {
      const container = new RadioButton({ itemLayout: "vertical" });
      const el = await fixture(container);
      const selectMenuEl = el.querySelector(
        ".kuc-radio-button__group__select-menu"
      ) as HTMLDivElement;

      expect(selectMenuEl.getAttribute("itemLayout")).to.equal("vertical");
    });

    it("should be changed to horizontal by setter", async () => {
      const container = new RadioButton({ itemLayout: "vertical" });
      container.itemLayout = "horizontal";

      const el = await fixture(container);
      const selectMenuEl = el.querySelector(
        ".kuc-radio-button__group__select-menu"
      ) as HTMLDivElement;

      expect(selectMenuEl.getAttribute("itemLayout")).to.equal("horizontal");
    });

    it("should be changed to vertical by setter", async () => {
      const container = new RadioButton({ itemLayout: "horizontal" });
      container.itemLayout = "vertical";

      const el = await fixture(container);
      const selectMenuEl = el.querySelector(
        ".kuc-radio-button__group__select-menu"
      ) as HTMLDivElement;

      expect(selectMenuEl.getAttribute("itemLayout")).to.equal("vertical");
    });
  });
});
