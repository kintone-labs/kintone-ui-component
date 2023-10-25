import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Tooltip } from "../index";

const getButtonElement = () => {
  const buttonEl = document.createElement("button");
  return buttonEl;
};

describe("Tooltip", () => {
  describe("accessibility", () => {
    it("should open the Tooltip when mouseenter and close the Tooltip when mouse leave", async () => {
      const container = new Tooltip({
        describeChild: true,
        container: getButtonElement(),
        title: "sample-title",
      });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      const eventMouseEnter = new MouseEvent("mouseenter");
      containerEl.dispatchEvent(eventMouseEnter);
      await elementUpdated(el);

      const titleEl = el.querySelector(
        ".kuc-tooltip__group__title",
      ) as HTMLDivElement;
      expect(getComputedStyle(titleEl).getPropertyValue("display")).to.be.equal(
        "block",
      );

      const eventMouseLeave = new MouseEvent("mouseleave");
      containerEl.dispatchEvent(eventMouseLeave);
      await elementUpdated(el);
      expect(getComputedStyle(titleEl).getPropertyValue("display")).to.be.equal(
        "none",
      );
    });

    it("should open the Tooltip when focusin container element", async () => {
      const container = new Tooltip({
        describeChild: true,
        container: getButtonElement(),
        title: "sample-title",
      });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      const eventFocusin = new MouseEvent("focusin");
      containerEl.dispatchEvent(eventFocusin);
      await elementUpdated(el);

      const titleEl = el.querySelector(
        ".kuc-tooltip__group__title",
      ) as HTMLDivElement;
      expect(getComputedStyle(titleEl).getPropertyValue("display")).to.be.equal(
        "block",
      );

      const eventFocusout = new MouseEvent("focusout");
      containerEl.dispatchEvent(eventFocusout);
      await elementUpdated(el);
      expect(getComputedStyle(titleEl).getPropertyValue("display")).to.be.equal(
        "none",
      );
    });

    it("should close the tooltip when pressing the Escape key while it is open", async () => {
      const container = new Tooltip({
        describeChild: true,
        container: getButtonElement(),
        title: "sample-title",
      });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      const eventMouseEnter = new MouseEvent("mouseenter");
      containerEl.dispatchEvent(eventMouseEnter);

      const titleEl = el.querySelector(
        ".kuc-tooltip__group__title",
      ) as HTMLDivElement;
      expect(getComputedStyle(titleEl).getPropertyValue("display")).to.be.equal(
        "block",
      );

      const eventEscapeKey = new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
      });
      containerEl.dispatchEvent(eventEscapeKey);
      await elementUpdated(el);
      expect(getComputedStyle(titleEl).getPropertyValue("display")).to.be.equal(
        "none",
      );
    });
    it("should close the tooltip when mouseleave the title element", async () => {
      const container = new Tooltip({
        describeChild: true,
        container: getButtonElement(),
        title: "sample-title",
      });
      const el = await fixture(container);
      const containerEl = el.querySelector(
        ".kuc-tooltip__group__container",
      ) as HTMLDivElement;

      const eventMouseEnter = new MouseEvent("mouseenter");
      containerEl.dispatchEvent(eventMouseEnter);

      const titleEl = el.querySelector(
        ".kuc-tooltip__group__title",
      ) as HTMLDivElement;
      expect(getComputedStyle(titleEl).getPropertyValue("display")).to.be.equal(
        "block",
      );

      const eventMouseLeave = new MouseEvent("mouseleave");
      titleEl.dispatchEvent(eventMouseLeave);
      await elementUpdated(el);
      expect(getComputedStyle(titleEl).getPropertyValue("display")).to.be.equal(
        "none",
      );
    });
  });
});
