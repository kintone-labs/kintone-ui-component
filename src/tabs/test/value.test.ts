import { expect, fixture } from "@open-wc/testing";

import { Tabs } from "../index";

const initItems = [
  { label: "tab0", value: "tab0" },
  { label: "tab1", value: "tab1" },
  { label: "tab2", value: "tab2" },
];

describe("Tabs", () => {
  describe("value", () => {
    it("should be displayed the first tab when not assigned on constructor", async () => {
      const container = new Tabs({ items: initItems });

      const el = await fixture(container);
      const tabPanels = el.querySelectorAll(
        ".kuc-tabs__group__tab-panel__content"
      );

      expect(container.value).to.equal("");
      expect(tabPanels[0].hasAttribute("hidden")).to.equal(false);
    });

    it("should be changed selected tab when changed by setter", async () => {
      const container = new Tabs({
        items: initItems,
        value: initItems[1].value,
      });
      container.value = initItems[2].value;
      const el = await fixture(container);
      const tabPanels = el.querySelectorAll(
        ".kuc-tabs__group__tab-panel__content"
      );
      expect(tabPanels[2].hasAttribute("hidden")).to.equal(false);
    });

    it("should be throw error when assigned a not string value", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'value' property is not string.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Tabs({ value: null, items: initItems });
      fixture(container);
    });
  });
});
