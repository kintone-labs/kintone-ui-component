import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("Function Change event run successfully when mousedown", () => {
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  const container = new MultiChoice({
    label: "Multi-Choice",
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
    value: [expectedValues[1]],
    disabled: false,
    visible: false
  });
  container.addEventListener("change", (event: any) => {
    expect(event.detail.value)
      .to.be.an("array")
      .that.include.members([expectedValues[1], expectedValues[2]]);
    expect(event.detail.oldValue)
      .to.be.an("array")
      .that.include.members([expectedValues[1]]);
  });

  it("Function Change event run successfully when mousedown", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");
    if (itemsEl.length > 0) {
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mousedown"));
    }
  });
});
