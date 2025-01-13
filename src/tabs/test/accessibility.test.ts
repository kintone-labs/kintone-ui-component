import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Text } from "../../text";
import { Tabs } from "../index";

const items = [
  {
    label: "Tab1",
    value: "tab1",
    content: new Text({ text: "text" }),
    visible: false,
  },
  {
    label: "Tab2",
    value: "tab2",
  },
  {
    value: "tab3",
    disabled: true,
  },
  {
    value: "tab4",
  },
];
describe("Tabs", () => {
  describe("accessibility", () => {
    it("should be move focus when click unselected tab and press ArrowLeft/ArrowRight key", async () => {
      const container = new Tabs({ items: items, value: items[1].value });
      const el = await fixture(container);
      const itemButtons = el.querySelectorAll(
        ".kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab__button",
      );
      let tab3FocusTriggerEvent: any = null;
      let tab1FocusTriggerEvent: any = null;
      itemButtons[1].addEventListener("focus", (event) => {
        tab1FocusTriggerEvent = event;
      });
      itemButtons[3].addEventListener("focus", (event) => {
        tab3FocusTriggerEvent = event;
      });
      itemButtons[3].dispatchEvent(new Event("click"));
      await elementUpdated(container);
      expect(tab3FocusTriggerEvent.type).to.equal("focus");
      itemButtons[3].dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowLeft" }),
      );
      tab3FocusTriggerEvent = null;
      await elementUpdated(container);
      expect(tab1FocusTriggerEvent.type).to.equal("focus");
      itemButtons[1].dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" }),
      );
      await elementUpdated(container);
      expect(tab3FocusTriggerEvent.type).to.equal("focus");
    });

    it("should be move focus when press Home/End key", async () => {
      const container = new Tabs({ items: items, value: items[0].value });
      const el = await fixture(container);
      const itemButtons = el.querySelectorAll(
        ".kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab__button",
      );
      let tab3FocusTriggerEvent: any = null;
      let tab1FocusTriggerEvent: any = null;
      itemButtons[1].addEventListener("focus", (event) => {
        tab1FocusTriggerEvent = event;
      });
      itemButtons[3].addEventListener("focus", (event) => {
        tab3FocusTriggerEvent = event;
      });
      itemButtons[1].dispatchEvent(new Event("click"));
      itemButtons[1].dispatchEvent(
        new KeyboardEvent("keydown", { key: "End" }),
      );
      await elementUpdated(container);
      expect(tab3FocusTriggerEvent.type).to.equal("focus");
      itemButtons[3].dispatchEvent(
        new KeyboardEvent("keydown", { key: "Home" }),
      );
      await elementUpdated(container);
      expect(tab1FocusTriggerEvent.type).to.equal("focus");
    });

    it("should be displayed the first visible tab when switching to a tab with non-string value by keyboard", async () => {
      const container = new Tabs({
        items: [
          { value: "tab0", visible: false },
          { value: "tab1" },
          { value: "tab2" },
          { value: 12 },
        ],
      });
      const el = await fixture(container);
      const itemButtons = el.querySelectorAll(
        ".kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab__button",
      );
      let tab1FocusTriggerEvent: any = null;
      itemButtons[1].addEventListener("focus", (event) => {
        tab1FocusTriggerEvent = event;
      });
      itemButtons[2].dispatchEvent(new Event("click"));
      itemButtons[2].dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" }),
      );
      await elementUpdated(container);
      expect(tab1FocusTriggerEvent.type).to.equal("focus");
    });
  });
});
