import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Combobox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Combobox", () => {
  it("should be triggered when click on the item", async () => {
    let triggeredEvent: any = null;
    const container = new Combobox({
      items: initItems,
      value: initItems[1].value,
    });

    container.addEventListener("change", (event: any) => {
      triggeredEvent = event;
    });

    const el = await fixture(container);
    const toggleIconButtonEl = el.querySelector(
      ".kuc-combobox__group__toggle__icon__button",
    ) as HTMLButtonElement;
    toggleIconButtonEl.click();
    await elementUpdated(container);

    const itemsEl = el.querySelectorAll(
      ".kuc-combobox__group__select-menu__item",
    );
    (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("click"));

    expect(triggeredEvent.type).to.equal("change");
    expect(triggeredEvent.detail.value).to.equal(initItems[2].value);
    expect(triggeredEvent.detail.oldValue).to.equal(initItems[1].value);
  });

  it("should not be triggered when click on the item as same as the selected item", async () => {
    let triggeredEvent: any = null;
    const container = new Combobox({
      items: initItems,
      value: initItems[1].value,
    });

    container.addEventListener("change", (event: any) => {
      triggeredEvent = event;
    });

    const el = await fixture(container);
    const toggleIconButtonEl = el.querySelector(
      ".kuc-combobox__group__toggle__icon__button",
    ) as HTMLButtonElement;
    toggleIconButtonEl.click();
    await elementUpdated(container);

    const itemsEl = el.querySelectorAll(
      ".kuc-combobox__group__select-menu__item",
    );
    (itemsEl[1] as HTMLDivElement).dispatchEvent(new Event("click"));
    expect(triggeredEvent).to.equal(null);
  });

  it("should not be triggered when click on the disabled item", async () => {
    let triggeredEvent: any = null;
    const container = new Combobox({
      items: [
        ...initItems,
        { label: "Banana", value: "banana", disabled: true },
      ],
    });

    container.addEventListener("change", (event: any) => {
      triggeredEvent = event;
    });

    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-combobox__group__toggle__icon__button",
    ) as HTMLDivElement;
    toggleEl.click();
    await elementUpdated(container);
    const itemsEl = el.querySelectorAll(
      ".kuc-combobox__group__select-menu__item",
    );
    (itemsEl[3] as HTMLDivElement).dispatchEvent(new Event("click"));
    expect(triggeredEvent).to.equal(null);
  });
});
