import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Dropdown", () => {
  it("should be triggered when mousedown on the item", async () => {
    let triggeredEvent: any = null;
    const container = new Dropdown({
      items: initItems,
      value: initItems[1].value,
    });

    container.addEventListener("change", (event: any) => {
      triggeredEvent = event;
    });

    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__group__toggle"
    ) as HTMLDivElement;
    toggleEl.click();

    const itemsEl = el.querySelectorAll(
      ".kuc-dropdown__group__select-menu__item"
    );
    (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mousedown"));

    expect(triggeredEvent.type).to.equal("change");
    expect(triggeredEvent.detail.value).to.equal(initItems[2].value);
    expect(triggeredEvent.detail.oldValue).to.equal(initItems[1].value);
  });

  it("should not be triggered when mousedown on the item as same as the selected item", async () => {
    let triggeredEvent: any = null;
    const container = new Dropdown({
      items: initItems,
      value: initItems[1].value,
    });

    container.addEventListener("change", (event: any) => {
      triggeredEvent = event;
    });

    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__group__toggle"
    ) as HTMLDivElement;
    toggleEl.click();

    const itemsEl = el.querySelectorAll(
      ".kuc-dropdown__group__select-menu__item"
    );
    (itemsEl[1] as HTMLDivElement).dispatchEvent(new Event("mousedown"));
    expect(triggeredEvent).to.equal(null);
  });
});
