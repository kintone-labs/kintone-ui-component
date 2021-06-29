import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("Function change event run successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];

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

  it("Function change event run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
    toggleEl.click();
    if (itemsEl.length > 0) {
      container.addEventListener("change", (event: any) => {
        expect(event.detail.value).to.be.equal(expectedValues[2]);
        expect(event.detail.oldValue).to.be.equal(expectedValues[1]);
      });
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mousedown"));
    }
  });

  it("Event mouseover run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
    toggleEl.click();
    let isHighlighted = false;
    if (itemsEl.length > 0) {
      itemsEl[2].addEventListener("mouseover", (event: Event) => {
        const target = event.target as HTMLLIElement;
        isHighlighted = target.classList.contains(
          "kuc-dropdown__select-menu__highlight"
        );
      });
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mouseover"));
    }
    await expect(isHighlighted).to.be.true;
  });

  it("Event mouseleave run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
    toggleEl.click();
    let isHighlighted = false;
    if (itemsEl.length > 0) {
      itemsEl[2].addEventListener("mouseleave", (event: Event) => {
        const target = event.target as HTMLLIElement;
        isHighlighted = target.classList.contains(
          "kuc-dropdown__select-menu__highlight"
        );
      });
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mouseleave"));
    }
    await expect(isHighlighted).to.be.false;
  });

  it("Event keyup run successfully", async () => {
    const el = await fixture(
      new Dropdown({
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
        value: expectedValues[0]
      })
    );
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
    toggleEl.click();
    let isHighlighted = false;
    toggleEl.addEventListener("keydown", () => {
      isHighlighted = itemsEl[2].classList.contains(
        "kuc-dropdown__select-menu__highlight"
      );
    });
    toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
    await expect(isHighlighted).to.be.true;
  });

  it("Event keyup on IE run successfully", async () => {
    const el = await fixture(
      new Dropdown({
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
        value: expectedValues[0]
      })
    );
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
    toggleEl.click();
    let isHighlighted = false;
    toggleEl.addEventListener("keydown", () => {
      isHighlighted = itemsEl[2].classList.contains(
        "kuc-dropdown__select-menu__highlight"
      );
    });
    toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Up" }));
    await expect(isHighlighted).to.be.true;
  });

  it("Event keydown run successfully", async () => {
    const el = await fixture(
      new Dropdown({
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
        value: expectedValues[0]
      })
    );
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
    toggleEl.click();
    let isHighlighted = false;
    toggleEl.addEventListener("keydown", () => {
      isHighlighted = itemsEl[1].classList.contains(
        "kuc-dropdown__select-menu__highlight"
      );
    });
    toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
    await expect(isHighlighted).to.be.true;
  });

  it("Event keyup on IE run successfully", async () => {
    const el = await fixture(
      new Dropdown({
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
        value: expectedValues[0]
      })
    );
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
    toggleEl.click();
    let isHighlighted = false;
    toggleEl.addEventListener("keydown", () => {
      isHighlighted = itemsEl[1].classList.contains(
        "kuc-dropdown__select-menu__highlight"
      );
    });
    toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));
    await expect(isHighlighted).to.be.true;
  });
});
