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
    it("should position tooltip at bottom correctly", async () => {
      const button = document.createElement("button") as HTMLButtonElement;
      button.textContent = "Test Button";
      button.style.position = "fixed";
      button.style.top = "100px";
      button.style.left = "100px";
      button.style.width = "100px";
      button.style.height = "40px";

      document.body.appendChild(button as HTMLElement);

      const tooltip = new Tooltip({
        title: "Test tooltip content",
        container: button,
        placement: "bottom",
      });

      const el = (await fixture(tooltip)) as HTMLElement;
      el.style.position = "relative";

      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLElement;
      containerEl.dispatchEvent(new MouseEvent("mouseenter"));

      await new Promise((resolve) => setTimeout(resolve, 10));

      const tooltipEl = el.querySelector(
        ".kuc-tooltip__group__title",
      ) as HTMLElement;
      const tooltipRect = tooltipEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      expect(tooltipRect.top).to.be.at.least(containerRect.bottom);
    });

    it("should position tooltip at left correctly", async () => {
      const button = document.createElement("button") as HTMLButtonElement;
      button.textContent = "Test Button";
      button.style.position = "fixed";
      button.style.top = "100px";
      button.style.left = "200px";
      button.style.width = "100px";
      button.style.height = "40px";

      document.body.appendChild(button as HTMLElement);

      const tooltip = new Tooltip({
        title: "Test tooltip content",
        container: button,
        placement: "left",
      });

      const el = (await fixture(tooltip)) as HTMLElement;
      el.style.position = "relative";

      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLElement;
      containerEl.dispatchEvent(new MouseEvent("mouseenter"));

      await new Promise((resolve) => setTimeout(resolve, 10));

      const tooltipEl = el.querySelector(
        ".kuc-tooltip__group__title",
      ) as HTMLElement;
      const tooltipRect = tooltipEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      expect(tooltipRect.right).to.be.at.most(containerRect.left);
    });

    it("should position tooltip at right correctly", async () => {
      const button = document.createElement("button") as HTMLButtonElement;
      button.textContent = "Test Button";
      button.style.position = "fixed";
      button.style.top = "100px";
      button.style.left = "100px";
      button.style.width = "100px";
      button.style.height = "40px";

      document.body.appendChild(button as HTMLElement);

      const tooltip = new Tooltip({
        title: "Test tooltip content",
        container: button,
        placement: "right",
      });

      const el = (await fixture(tooltip)) as HTMLElement;
      el.style.position = "relative";

      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLElement;
      containerEl.dispatchEvent(new MouseEvent("mouseenter"));

      await new Promise((resolve) => setTimeout(resolve, 10));

      const tooltipEl = el.querySelector(
        ".kuc-tooltip__group__title",
      ) as HTMLElement;
      const tooltipRect = tooltipEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      expect(tooltipRect.left).to.be.at.least(containerRect.right);
    });
  });
});
