import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { TimePicker } from "../index";
import "../../base/datetime/listbox";

describe("BaseTime", () => {
  describe("changeEvent", () => {
    it("should triggered when select item in listbox", async () => {
      let triggeredEvent: any = null;
      const container = new TimePicker({ value: "05:30" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;
      const listBoxEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox"
      ) as HTMLUListElement;
      const itemListBoxEl = listBoxEl.children[0] as HTMLLIElement;

      inputEl.click();
      await elementUpdated(el);
      itemListBoxEl.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true })
      );

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");
      expect(triggeredEvent.detail.oldValue).to.equal("05:30");
    });
  });
});
