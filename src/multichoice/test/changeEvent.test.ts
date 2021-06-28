import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("Function Change event run successfully when mousedown", () => {
  const initItems = [
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2" },
    { label: "Item 3", value: "item-3" }
  ];
  const expectedValues = ["item-1", "item-2", "item-3"];

  const container = new MultiChoice({
    label: "Multi-Choice",
    requiredIcon: false,
    items: initItems,
    value: [initItems[1].value],
    disabled: false,
    visible: false
  });

  it("Function Change event run successfully when mousedown", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");
    if (itemsEl.length > 0) {
      container.addEventListener("change", (event: any) => {
        expect(event.detail.value)
          .to.be.an("array")
          .that.include.members([expectedValues[1], expectedValues[2]]);
        expect(event.detail.oldValue)
          .to.be.an("array")
          .that.include.members([expectedValues[1]]);
      });
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mousedown"));
    }
  });

  it("Event mouseover run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-multi-choice__menu"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");
    toggleEl.click();
    let isHighlighted = false;
    if (itemsEl.length > 0) {
      itemsEl[2].addEventListener("mouseover", (event: Event) => {
        const target = event.target as HTMLLIElement;
        isHighlighted = target.classList.contains(
          "kuc-multi-choice__menu__highlight"
        );
      });
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mouseover"));
    }
    await expect(isHighlighted).to.be.true;
  });

  it("Event mouseleave run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-multi-choice__menu"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");
    toggleEl.click();
    let isHighlighted = false;
    if (itemsEl.length > 0) {
      itemsEl[2].addEventListener("mouseleave", (event: Event) => {
        const target = event.target as HTMLLIElement;
        isHighlighted = target.classList.contains(
          "kuc-multi-choice__menu__highlight"
        );
      });
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mouseleave"));
    }
    await expect(isHighlighted).to.be.false;
  });

  it("Event keyup run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-multi-choice__menu"
    ) as HTMLDivElement;

    const event = new KeyboardEvent("keydown", { key: "ArrowUp" });
    toggleEl.addEventListener("keydown", () => {
      el.classList.add("keydown-arrowup");
    });
    toggleEl.dispatchEvent(event);
    await expect(el.classList.contains("keydown-arrowup")).to.be.true;
  });

  it("Event keyup run successfully", async () => {
    const el = await fixture(
      new MultiChoice({
        items: initItems,
        value: [initItems[0].value]
      })
    );
    const toggleEl = el.querySelector(
      ".kuc-multi-choice__menu"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");

    let isHighlighted = false;
    toggleEl.addEventListener("keydown", () => {
      isHighlighted = itemsEl[2].classList.contains(
        "kuc-multi-choice__menu__highlight"
      );
    });
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mouseover"));
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mousedown"));

    toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
    await expect(isHighlighted).to.true;
  });

  it("Event keyup on IE run successfully", async () => {
    const el = await fixture(
      new MultiChoice({
        items: initItems,
        value: [initItems[0].value]
      })
    );
    const toggleEl = el.querySelector(
      ".kuc-multi-choice__menu"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");

    let isHighlighted = false;
    toggleEl.addEventListener("keydown", () => {
      isHighlighted = itemsEl[2].classList.contains(
        "kuc-multi-choice__menu__highlight"
      );
    });
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mouseover"));
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mousedown"));

    toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Up" }));
    await expect(isHighlighted).to.true;
  });

  it("Event keydown run successfully", async () => {
    const el = await fixture(
      new MultiChoice({
        items: initItems,
        value: [initItems[0].value]
      })
    );
    const toggleEl = el.querySelector(
      ".kuc-multi-choice__menu"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");

    let isHighlighted = false;
    toggleEl.addEventListener("keydown", () => {
      isHighlighted = itemsEl[1].classList.contains(
        "kuc-multi-choice__menu__highlight"
      );
    });
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mouseover"));
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mousedown"));

    toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
    await expect(isHighlighted).to.true;
  });

  it("Event keyup on IE run successfully", async () => {
    const el = await fixture(
      new MultiChoice({
        items: initItems,
        value: [initItems[0].value]
      })
    );
    const toggleEl = el.querySelector(
      ".kuc-multi-choice__menu"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");

    let isHighlighted = false;
    toggleEl.addEventListener("keydown", () => {
      isHighlighted = itemsEl[1].classList.contains(
        "kuc-multi-choice__menu__highlight"
      );
    });
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mouseover"));
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mousedown"));

    toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));
    await expect(isHighlighted).to.true;
  });

  it("Event key default run successfully", async () => {
    const el = await fixture(
      new MultiChoice({
        items: initItems,
        value: [initItems[0].value]
      })
    );
    const toggleEl = el.querySelector(
      ".kuc-multi-choice__menu"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-multi-choice__menu__item");

    let isHighlighted = false;
    toggleEl.addEventListener("keydown", () => {
      isHighlighted = itemsEl[0].classList.contains(
        "kuc-multi-choice__menu__highlight"
      );
    });
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mouseover"));
    (itemsEl[0] as HTMLDivElement).dispatchEvent(new MouseEvent("mousedown"));

    toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Space" })); // "Space" is incorrect
    await expect(isHighlighted).to.true;
  });
});
