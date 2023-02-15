import { expect, fixture } from "@open-wc/testing";

import { Text } from "../../text/index";
import { Tabs } from "../index";

const items = [
  {
    label: "Tab1",
    value: "tab1",
    content: new Text({ text: "text" }),
  },
  {
    label: "Tab2",
    value: "tab2",
  },
  {
    value: "tab3",
    disabled: true,
  },
];
describe("Tabs", () => {
  describe("accessibility", () => {
    it("should be triggered when click unselected tab", async () => {
      const container = new Tabs({ items: items, value: items[0].value });
      const el = await fixture(container);
      const itemButtons = el.querySelectorAll(
        ".kuc-tabs__group__tab-list__tab__button"
      );
      let tab0FocusTriggerEvent: any = null;
      let tab1FocusTriggerEvent: any = null;
      itemButtons[1].addEventListener("focus", (event) => {
        tab1FocusTriggerEvent = event;
      });
      itemButtons[0].addEventListener("focus", (event) => {
        tab0FocusTriggerEvent = event;
      });
      itemButtons[1].dispatchEvent(new Event("click"));
      const tabsUl = el.querySelector(
        ".kuc-tabs__group__tab-list"
      ) as HTMLUListElement;
      tabsUl.dispatchEvent(new Event("blur"));
      itemButtons[0].dispatchEvent(new Event("click"));
      itemButtons[0].dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      expect(tab1FocusTriggerEvent.type).to.equal("focus");
      itemButtons[1].dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowLeft" })
      );
      expect(tab0FocusTriggerEvent.type).to.equal("focus");
    });
  });
});
