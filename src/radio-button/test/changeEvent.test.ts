import {
  expect,
  fixture,
  triggerFocusFor,
  triggerBlurFor
} from "@open-wc/testing";
import { RadioButton } from "../index";

describe("Function change event run successfully by mouse/keyboard event", () => {
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  const container = new RadioButton({
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
    value: expectedValues[1]
  });

  container.addEventListener("change", (event: any) => {
    expect(event.detail.oldValue).to.have.equal(expectedValues[1]);
    expect(event.detail.value).to.have.equal(expectedValues[2]);
  });

  it("Function change event run successfully by mouse/keyboard event", async () => {
    const el = await fixture(container);
    const menuEl = (await el.querySelector(
      ".kuc-radio-button__group__select-menu"
    )) as HTMLDivElement;
    // eslint-disable-next-line require-atomic-updates
    container.value = expectedValues[2];
    const event = new CustomEvent("change", {
      detail: { oldValue: expectedValues[1], value: expectedValues[2] }
    });
    menuEl.dispatchEvent(event);
  });

  it("can be focused and blured", async () => {
    const el: HTMLElement = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-radio-button__group__select-menu__item__input"
    ) as HTMLInputElement;
    await triggerFocusFor(itemsEl);
    await expect(document.activeElement?.isSameNode(itemsEl)).to.be.true;

    await triggerBlurFor(itemsEl);
    await expect(document.activeElement?.isSameNode(itemsEl)).to.be.false;
  });
});
