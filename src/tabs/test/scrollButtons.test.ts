import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Tabs } from "../index";

describe("Tabs", () => {
  describe("scrollButtons", () => {
    const longItems = [
      { label: "Very Long Tab Label 1", value: "1" },
      { label: "Very Long Tab Label 2", value: "2" },
      { label: "Very Long Tab Label 3", value: "3" },
      { label: "Very Long Tab Label 4", value: "4" },
      { label: "Very Long Tab Label 5", value: "5" },
    ];

    it("should have default scrollButtons property set to false", async () => {
      const container = new Tabs({ items: longItems });
      const el = await fixture(container);

      expect(container.scrollButtons).to.equal(false);

      const prevButton = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-pre-button",
      );
      const nextButton = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-next-button",
      );
      expect(prevButton?.hasAttribute("hidden")).equal(true);
      expect(nextButton?.hasAttribute("hidden")).equal(true);
    });

    it("should update button visibility when scrollButtons is changed after initialization", async () => {
      const container = new Tabs({
        items: longItems,
      });
      const el = await fixture(container);

      container.scrollButtons = true;
      await elementUpdated(container);

      const prevButton = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-pre-button",
      );
      const nextButton = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-next-button",
      );
      expect(prevButton?.hasAttribute("hidden")).equal(false);
      expect(nextButton?.hasAttribute("hidden")).equal(false);
    });

    it("should scroll right when mousedown next button", async () => {
      const container = new Tabs({
        items: longItems,
        scrollButtons: true,
      });
      const el = await fixture(container);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-list-container",
      ) as HTMLDivElement;
      tabListContainer.style.width = "300px";

      const nextButton = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-next-button",
      ) as HTMLButtonElement;

      // Store initial scroll position
      const initialScrollLeft = tabListContainer.scrollLeft;

      nextButton.dispatchEvent(new Event("mousedown"));
      // Wait for scroll to complete
      await new Promise((resolve) => setTimeout(resolve, 500));
      await elementUpdated(container);
      nextButton.dispatchEvent(new Event("mousedown"));
      await new Promise((resolve) => setTimeout(resolve, 500));
      await elementUpdated(container);

      expect(tabListContainer.scrollLeft).to.be.greaterThan(initialScrollLeft);
    });

    it("should scroll left when mousedown prev button", async () => {
      const container = new Tabs({
        items: longItems,
        scrollButtons: true,
      });
      const el = await fixture(container);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-list-container",
      ) as HTMLDivElement;

      const prevButton = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-pre-button",
      ) as HTMLButtonElement;

      // First scroll right to enable prev button
      tabListContainer.scrollLeft = 100;
      tabListContainer.dispatchEvent(new Event("scroll"));
      await elementUpdated(container);

      // Store position before mousedown prev
      const scrollLeftBeforeClick = tabListContainer.scrollLeft;

      prevButton.dispatchEvent(new Event("mousedown"));

      // Wait for scroll to complete
      await new Promise((resolve) => setTimeout(resolve, 100));
      await elementUpdated(container);

      expect(tabListContainer.scrollLeft).to.be.lessThan(scrollLeftBeforeClick);
    });

    it("should disable prev button when scrolled to start", async () => {
      const container = new Tabs({
        items: longItems,
        scrollButtons: true,
      });
      const el = await fixture(container);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-list-container",
      ) as HTMLDivElement;

      const prevButton = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-pre-button",
      ) as HTMLButtonElement;

      // Scroll to start
      tabListContainer.scrollLeft = 0;
      tabListContainer.dispatchEvent(new Event("scroll"));
      await elementUpdated(container);

      expect(prevButton.disabled).to.equal(true);
    });

    it("should disabled next button when scrolled to end", async () => {
      const container = new Tabs({
        items: longItems,
        scrollButtons: true,
      });
      const el = await fixture(container);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-list-container",
      ) as HTMLDivElement;

      const nextButton = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-next-button",
      ) as HTMLButtonElement;

      // Scroll to end
      tabListContainer.scrollLeft =
        tabListContainer.scrollWidth - tabListContainer.clientWidth;
      tabListContainer.dispatchEvent(new Event("scroll"));
      await elementUpdated(container);

      expect(nextButton).to.have.attribute("disabled");
    });
  });
});
