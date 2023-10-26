import { expect, fixture } from "@open-wc/testing";

import { Tooltip } from "../index";

const getButtonElement = () => {
  const buttonEl = document.createElement("button");
  return buttonEl;
};

describe("Tooltip", () => {
  describe("describeChild", () => {
    it("should set 'aria-label' attribute to first child element when not assigning", async () => {
      const container = new Tooltip({
        container: getButtonElement(),
        title: "sample-title",
      });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      const event = new MouseEvent("mouseenter");
      containerEl.dispatchEvent(event);

      const firstChildElement = containerEl.firstElementChild;
      expect(firstChildElement!.getAttribute("aria-label")).to.be.equal(
        "sample-title",
      );
    });

    it("should set 'aria-label' attribute to first child element when assigned to false", async () => {
      const container = new Tooltip({
        describeChild: false,
        container: getButtonElement(),
        title: "sample-title",
      });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      const event = new MouseEvent("mouseenter");
      containerEl.dispatchEvent(event);

      const firstChildElement = containerEl.firstElementChild;
      expect(firstChildElement!.getAttribute("aria-label")).to.be.equal(
        "sample-title",
      );
    });

    it("should assigned the 'title' attribute to first child element when assign to true and the tooltip is closed", async () => {
      const container = new Tooltip({
        describeChild: true,
        container: getButtonElement(),
        title: "sample-title",
      });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      const firstChildElement = containerEl.firstElementChild;
      expect(firstChildElement!.getAttribute("title")).to.be.equal(
        "sample-title",
      );
    });

    it("should assigned the 'aria-describedby' attribute to the first child element when the tooltip is opened", async () => {
      const container = new Tooltip({
        describeChild: true,
        container: getButtonElement(),
        title: "sample-title",
      });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      const event = new MouseEvent("focusin");
      containerEl.dispatchEvent(event);

      const firstChildElement = containerEl.firstElementChild;
      expect(firstChildElement!.hasAttribute("aria-describedby")).to.be.equal(
        true,
      );
    });
  });
});
