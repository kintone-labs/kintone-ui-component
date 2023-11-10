import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Tooltip } from "../index";

describe("Tooltip", () => {
  describe("container", () => {
    it("should be empty when not assigning", async () => {
      const container = new Tooltip();
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      expect(containerEl.innerText).to.be.equal("");
    });

    it('should be "container" when assigned "container" on constructor', async () => {
      const container = new Tooltip({
        title: "sample-title",
        container: "container",
      });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      expect(containerEl.innerText).to.be.equal("container");
    });

    it('should be "updated-container" when changed to "updated-container" by setter', async () => {
      const container = new Tooltip({
        title: "sample",
        container: "container",
      });
      const el = await fixture(container);
      container.container = "updated-container";
      await elementUpdated(el);

      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      expect(containerEl.innerText).to.be.equal("updated-container");
    });

    it("should be empty when set undefined on constructor", async () => {
      const container = new Tooltip({ title: "title", container: undefined });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      expect(containerEl.innerText).to.be.equal("");
    });

    it("should be empty when set undefined on setter", async () => {
      const container = new Tooltip({ title: "title", container: "undefined" });
      const el = await fixture(container);
      container.container = undefined;
      await elementUpdated(el);

      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      expect(containerEl.innerText).to.be.equal("");
    });
  });
});
