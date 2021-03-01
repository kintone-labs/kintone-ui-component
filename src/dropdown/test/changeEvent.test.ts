import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("Function change event run successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
    label: "Fruit",
    requiredIcon: false,
    items: [
      {
        label: expectedLabels[0],
        value: expectedValues[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1]
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ],
    value: expectedValues[1],
    disabled: false,
    visible: false
  });
  container.addEventListener("change", (event: any) => {
    expect(event.detail.value).to.be.equal(expectedValues[2]);
    expect(event.detail.oldValue).to.be.equal(expectedValues[1]);
  });

  it("Function change event run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
    toggleEl.click();
    if (itemsEl.length > 0) {
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mousedown"));
    }
  });
});
