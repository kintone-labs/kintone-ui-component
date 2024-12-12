import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Tabs } from "../index";
describe("Tabs", () => {
  describe("allowScroll", () => {
    const longItems = [
      { label: "Very Long Tab Label 1", value: "1" },
      { label: "Very Long Tab Label 2", value: "2" },
      { label: "Very Long Tab Label 3", value: "3" },
      { label: "Very Long Tab Label 4", value: "4" },
      { label: "Very Long Tab Label 5", value: "5" },
    ];

    it("should have default allowScroll property set to false", async () => {
      const container = new Tabs({ items: longItems });
      const el = await fixture(container);

      expect(container.allowScroll).to.equal(false);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-list-container",
      ) as HTMLDivElement;
      expect(tabListContainer?.style.getPropertyValue("overflow-x")).to.equal(
        "visible",
      );

      const tabGroup = el.querySelector(".kuc-tabs__group");
      expect(tabGroup?.parentElement?.style.getPropertyValue("width")).to.equal(
        "auto",
      );
    });

    it("should enable horizontal scroll when allowScroll is true", async () => {
      const container = new Tabs({
        items: longItems,
        allowScroll: true,
      });
      const el = await fixture(container);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-list-container",
      ) as HTMLDivElement;
      expect(tabListContainer?.style.getPropertyValue("overflow-x")).to.equal(
        "auto",
      );

      const tabGroup = el.querySelector(".kuc-tabs__group");
      expect(tabGroup?.parentElement?.style.getPropertyValue("width")).to.equal(
        "100%",
      );
    });

    it("should update scroll behavior when allowScroll is changed after initialization", async () => {
      const container = new Tabs({ items: longItems });
      const el = await fixture(container);

      container.allowScroll = true;
      await elementUpdated(container);

      const tabListContainer = el.querySelector(
        ".kuc-tabs__group__tabs-container__tab-list-container",
      ) as HTMLDivElement;
      expect(tabListContainer?.style.getPropertyValue("overflow-x")).to.equal(
        "auto",
      );

      const tabGroup = el.querySelector(".kuc-tabs__group");
      expect(tabGroup?.parentElement?.style.getPropertyValue("width")).to.equal(
        "100%",
      );
    });
  });
});
