import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

describe("Dropdown", () => {
  it("should be triggered when mousedown on the item", async () => {
    const container = new Dropdown({
      items: initItems,
      value: initItems[1].value,
      error: ""
    });

    container.addEventListener("change", (event: any) => {
      expect(event.detail.value).to.be.equal(initItems[2].value);
      expect(event.detail.oldValue).to.be.equal(initItems[1].value);
      container.error = "changed";
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
    expect(container.error).to.equal("changed");
  });
});
