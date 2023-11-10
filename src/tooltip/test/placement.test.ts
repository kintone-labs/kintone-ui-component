import { expect, fixture } from "@open-wc/testing";

import { Tooltip } from "../index";

describe("Tooltip", () => {
  describe("placement", () => {
    it("should be display top when not assigning on constructor", async () => {
      const container = new Tooltip({ title: "title", container: "container" });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-tooltip__group") as HTMLDivElement;

      expect(groupEl.classList.contains("kuc-tooltip__group--top")).to.equal(
        true,
      );
    });

    it('should be "bottom" when assigning on constructor', async () => {
      const container = new Tooltip({
        title: "title",
        container: "container",
        placement: "bottom",
      });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-tooltip__group") as HTMLDivElement;

      expect(groupEl.classList.contains("kuc-tooltip__group--bottom")).to.equal(
        true,
      );
    });

    it('should be "left" when assigning on constructor', async () => {
      const container = new Tooltip({
        title: "title",
        container: "container",
        placement: "left",
      });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-tooltip__group") as HTMLDivElement;

      expect(groupEl.classList.contains("kuc-tooltip__group--left")).to.equal(
        true,
      );
    });
    it('should be "right" when assigning on constructor', async () => {
      const container = new Tooltip({
        title: "title",
        container: "container",
        placement: "right",
      });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-tooltip__group") as HTMLDivElement;

      expect(groupEl.classList.contains("kuc-tooltip__group--right")).to.equal(
        true,
      );
    });
    it('should be "top" when assigning on constructor', async () => {
      const container = new Tooltip({
        title: "title",
        container: "container",
        placement: "top",
      });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-tooltip__group") as HTMLDivElement;

      expect(groupEl.classList.contains("kuc-tooltip__group--top")).to.equal(
        true,
      );
    });
  });
});
