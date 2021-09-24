import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeMenu } from "../index";

describe("BaseDateTimeMenu", () => {
  describe("kuc:calendar-menu-click event", () => {
    it("should be triggered kuc:calendar-menu-click event", async () => {
      let triggeredEvent: any = null;
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" }
      ];

      const container = new BaseDateTimeMenu();
      container.items = initItems;
      container.addEventListener("kuc:calendar-menu-click", event => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-menu__menu__item"
      );
      (itemsEl[2] as HTMLDivElement).click();
      expect(triggeredEvent.type).to.equal("kuc:calendar-menu-click");
      expect(triggeredEvent.detail.value).to.equal(initItems[2].value);
    });
  });
});
