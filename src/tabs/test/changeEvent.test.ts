import { expect, fixture } from "@open-wc/testing";

import { Text } from "../../text";
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
    label: "Tab3",
    disabled: true,
  },
];

describe("Tabs", () => {
  describe("changeEvent", () => {
    it("should be triggered when click unselected tab", async () => {
      let triggeredEvent: any = null;
      const container = new Tabs({ items: items, value: items[0].value });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const itemButtons = el.querySelectorAll(
        ".kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab__button ",
      );
      itemButtons[0].dispatchEvent(new Event("click"));
      itemButtons[1].dispatchEvent(new Event("mousedown"));
      itemButtons[1].dispatchEvent(new Event("click"));
      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldValue).to.equal(items[0].value);
      expect(triggeredEvent.detail.value).to.equal(items[1].value);
    });

    it("should not be triggered when change event in tab-panel was triggered", async () => {
      let triggeredEvent: any = null;
      const container = new Tabs({ items: items });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input",
      ) as HTMLInputElement;
      inputEl.value = "Apple";
      inputEl.dispatchEvent(new CustomEvent("change"));
      expect(triggeredEvent).to.equal(null);
    });

    it("should not be triggered when press ArrowLeft/ArrowRight key in items with only one tab", async () => {
      let triggeredEvent: any = null;
      const container = new Tabs({
        value: "tab1",
        items: [
          {
            label: "Tab1",
            value: "tab1",
            content: new Text({ text: "text" }),
          },
        ],
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const itemButtons = el.querySelectorAll(
        ".kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab__button",
      );
      itemButtons[0].dispatchEvent(new Event("click"));
      itemButtons[0].dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowLeft" }),
      );
      expect(triggeredEvent).to.equal(null);
      itemButtons[0].dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" }),
      );
      expect(triggeredEvent).to.equal(null);
    });
  });
});
