import { expect, fixture } from "@open-wc/testing";
import { Checkbox } from "../index";

describe("Function change event run successfully by mouse/keyboard event", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];

  const container = new Checkbox({
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
    value: [expectedValues[1]]
  });
  container.addEventListener("change", (event: any) => {
    expect(event.detail.value)
      .to.be.an("array")
      .that.includes(expectedValues[2], expectedValues[1]);
    expect(event.detail.oldValue)
      .to.be.an("array")
      .that.includes(expectedValues[1]);
  });

  it("Function change event run successfully by mouse/keyboard event", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(".kuc-checkbox__group__select-menu")!
      .children as HTMLCollection;
    if (itemsEl.length > 0) {
      const secondItemEl = itemsEl[2] as HTMLElement;
      const inputEl = secondItemEl.children[0] as HTMLInputElement;
      inputEl.dispatchEvent(new Event("change"));
    }
  });
});
