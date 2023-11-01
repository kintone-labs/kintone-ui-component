import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Tooltip } from "../index";

describe("Tooltip", () => {
  describe("title", () => {
    it("should not display when not assigning", async () => {
      const container = new Tooltip();
      const el = await fixture(container);
      const titleElement = el.querySelector(
        ".kuc-tooltip__group__title__wrapper__text",
      ) as HTMLDivElement;

      expect(titleElement).to.be.equal(null);
    });

    it('should be "sample-title" when assigned "sample-title" on constructor', async () => {
      const container = new Tooltip({
        title: "sample-title",
        container: "container",
      });
      const el = await fixture(container);
      const titleElement = el.querySelector(
        ".kuc-tooltip__group__title__wrapper__text",
      ) as HTMLDivElement;

      expect(titleElement.childNodes[2].textContent).to.be.equal(
        "sample-title",
      );
    });

    it('should be "sample-title" when changed to "sample-title" by setter', async () => {
      const container = new Tooltip({
        title: "sample",
        container: "container",
      });
      const el = await fixture(container);
      container.title = "sample-title";
      await elementUpdated(el);

      const titleElement = el.querySelector(
        ".kuc-tooltip__group__title__wrapper__text",
      ) as HTMLDivElement;

      expect(titleElement.childNodes[2].textContent).to.be.equal(
        "sample-title",
      );
    });

    it("should be empty when set undefined on constructor", async () => {
      const container = new Tooltip({ title: undefined });
      const el = await fixture(container);
      const titleElement = el.querySelector(
        ".kuc-tooltip__group__title__wrapper__text",
      ) as HTMLDivElement;

      expect(titleElement).to.be.equal(null);
    });

    it("should be empty when set undefined on setter", async () => {
      const container = new Tooltip({ title: "title" });
      const el = await fixture(container);
      container.title = undefined;
      await elementUpdated(el);

      const titleElement = el.querySelector(
        ".kuc-tooltip__group__title__wrapper__text",
      ) as HTMLDivElement;

      expect(titleElement).to.be.equal(null);
    });
  });
});
