import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Tabs } from "../index";

describe("Tabs", () => {
  describe("allowScrollButtons", () => {
    const longItems = [
      { label: "Very Long Tab Label 1", value: "1" },
      { label: "Very Long Tab Label 2", value: "2" },
      { label: "Very Long Tab Label 3", value: "3" },
      { label: "Very Long Tab Label 4", value: "4" },
      { label: "Very Long Tab Label 5", value: "5" },
    ];

    it("should have default allowScrollButtons property set to false", async () => {
      const container = new Tabs({ items: longItems });
      const el = await fixture(container);

      expect(container.allowScrollButtons).to.equal(false);

      const prevButton = el.querySelector(".kuc-tabs__group__tab-pre-button");
      const nextButton = el.querySelector(".kuc-tabs__group__tab-next-button");
      expect(prevButton?.hasAttribute("hidden")).equal(true);
      expect(nextButton?.hasAttribute("hidden")).equal(true);
    });

    it("should not show scroll buttons when only allowScrollButtons is true", async () => {
      const container = new Tabs({
        items: longItems,
        allowScrollButtons: true,
        allowScroll: false,
      });
      const el = await fixture(container);

      const prevButton = el.querySelector(".kuc-tabs__group__tab-pre-button");
      const nextButton = el.querySelector(".kuc-tabs__group__tab-next-button");
      expect(prevButton?.hasAttribute("hidden")).equal(true);
      expect(nextButton?.hasAttribute("hidden")).equal(true);
    });

    it("should show scroll buttons when both allowScroll and allowScrollButtons are true", async () => {
      const container = new Tabs({
        items: longItems,
        allowScroll: true,
        allowScrollButtons: true,
      });
      const el = await fixture(container);

      const prevButton = el.querySelector(".kuc-tabs__group__tab-pre-button");
      const nextButton = el.querySelector(".kuc-tabs__group__tab-next-button");
      expect(prevButton?.hasAttribute("hidden")).equal(false);
      expect(nextButton?.hasAttribute("hidden")).equal(false);
    });

    it("should update button visibility when allowScrollButtons is changed after initialization", async () => {
      const container = new Tabs({
        items: longItems,
        allowScroll: true,
      });
      const el = await fixture(container);

      container.allowScrollButtons = true;
      await elementUpdated(container);

      const prevButton = el.querySelector(".kuc-tabs__group__tab-pre-button");
      const nextButton = el.querySelector(".kuc-tabs__group__tab-next-button");
      expect(prevButton?.hasAttribute("hidden")).equal(false);
      expect(nextButton?.hasAttribute("hidden")).equal(false);
    });

    it("should scroll right when clicking next button", async () => {
      const container = new Tabs({
        items: longItems,
        allowScroll: true,
        allowScrollButtons: true,
      });
      const el = await fixture(container);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tab-list-container",
      ) as HTMLDivElement;
      const nextButton = el.querySelector(
        ".kuc-tabs__group__tab-next-button",
      ) as HTMLDivElement;

      const initialScrollLeft = tabListContainer.scrollLeft;
      nextButton.click();
      await elementUpdated(container);

      expect(tabListContainer.scrollLeft).to.be.greaterThan(initialScrollLeft);
    });

    it("should scroll left when clicking prev button", async () => {
      const container = new Tabs({
        items: longItems,
        allowScroll: true,
        allowScrollButtons: true,
      });
      const el = await fixture(container);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tab-list-container",
      ) as HTMLDivElement;
      const prevButton = el.querySelector(
        ".kuc-tabs__group__tab-pre-button",
      ) as HTMLDivElement;
      const nextButton = el.querySelector(
        ".kuc-tabs__group__tab-next-button",
      ) as HTMLDivElement;

      // First scroll right to test scrolling left
      nextButton.click();
      await elementUpdated(container);
      const scrolledRightPosition = tabListContainer.scrollLeft;

      prevButton.click();
      await elementUpdated(container);

      expect(tabListContainer.scrollLeft).to.be.lessThan(scrolledRightPosition);
    });
    it("should handle first tab exceeding container width", async () => {
      const container = new Tabs({
        items: [
          { label: "Tab 1", value: "1" },
          { label: "Tab 2", value: "2" },
        ],
        allowScroll: true,
        allowScrollButtons: true,
      });
      const el = await fixture(container);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tab-list-container",
      ) as HTMLDivElement;
      const firstTab = el.querySelector(
        ".kuc-tabs__group__tab-list__tab__button",
      ) as HTMLButtonElement;

      // Set container to small width
      tabListContainer.style.width = "100px";
      // Force first tab to be wider than container
      firstTab.style.width = "150px";
      await elementUpdated(container);

      const nextButton = el.querySelector(
        ".kuc-tabs__group__tab-next-button",
      ) as HTMLDivElement;

      const initialScrollLeft = tabListContainer.scrollLeft;
      nextButton.click();
      await elementUpdated(container);

      // When first tab exceeds container width
      // The scroll amount should exactly equal container width (100px)
      const scrollAmount = tabListContainer.scrollLeft - initialScrollLeft;
      expect(scrollAmount).to.equal(100);

      // Additional verification that we really hit the i === 0 branch:
      // Try scrolling again - should still only scroll by container width
      nextButton.click();
      await elementUpdated(container);
      const secondScrollAmount =
        tabListContainer.scrollLeft - (initialScrollLeft + scrollAmount);
      expect(secondScrollAmount).to.equal(100);
    });
  });
});
