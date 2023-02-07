import { expect, fixture } from "@open-wc/testing";

import { Checkbox } from "../index";

describe("Checkbox", () => {
  describe("itemLayout", () => {
    it("should be horizontal when not assigned in constructor", async () => {
      const container = new Checkbox();
      const el = await fixture(container);
      const selectMenuEl = el.querySelector(
        ".kuc-checkbox__group__select-menu"
      ) as HTMLDivElement;

      expect(selectMenuEl.getAttribute("itemLayout")).to.equal("horizontal");
    });

    it("should be vertical when assigned vertical in constructor", async () => {
      const container = new Checkbox({ itemLayout: "vertical" });
      const el = await fixture(container);
      const selectMenuEl = el.querySelector(
        ".kuc-checkbox__group__select-menu"
      ) as HTMLDivElement;

      expect(selectMenuEl.getAttribute("itemLayout")).to.equal("vertical");
    });

    it("should be changed to horizontal by setter", async () => {
      const container = new Checkbox({ itemLayout: "vertical" });
      container.itemLayout = "horizontal";

      const el = await fixture(container);
      const selectMenuEl = el.querySelector(
        ".kuc-checkbox__group__select-menu"
      ) as HTMLDivElement;

      expect(selectMenuEl.getAttribute("itemLayout")).to.equal("horizontal");
    });

    it("should be changed to vertical by setter", async () => {
      const container = new Checkbox({ itemLayout: "horizontal" });
      container.itemLayout = "vertical";

      const el = await fixture(container);
      const selectMenuEl = el.querySelector(
        ".kuc-checkbox__group__select-menu"
      ) as HTMLDivElement;

      expect(selectMenuEl.getAttribute("itemLayout")).to.equal("vertical");
    });
  });
});
