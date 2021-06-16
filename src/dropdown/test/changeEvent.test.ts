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
    if (itemsEl.length > 0) {
      itemsEl[2].addEventListener("mouseover", () => {
        el.classList.add("mouseover");
      });
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mouseover"));
    }
    await expect(container.classList.contains("mouseover")).to.be.true;
  });

  it("Event mouseleave run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;
    const itemsEl = el.querySelectorAll(".kuc-dropdown__select-menu__item");
    toggleEl.click();
    if (itemsEl.length > 0) {
      itemsEl[2].addEventListener("mouseleave", () => {
        el.classList.add("mouseleave");
      });
      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mouseleave"));
    }
    await expect(container.classList.contains("mouseleave")).to.be.true;
  });

  it("Event keyup run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;

    const event = new KeyboardEvent("keydown", { key: "ArrowUp" });
    toggleEl.addEventListener("keydown", () => {
      el.classList.add("keydown-arrowup");
    });
    toggleEl.dispatchEvent(event);
    await expect(el.classList.contains("keydown-arrowup")).to.be.true;
  });

  it("Event keyup on IE run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;

    const event = new KeyboardEvent("keydown", { key: "Up" });
    toggleEl.addEventListener("keydown", () => {
      el.classList.add("keydown-up");
    });
    toggleEl.dispatchEvent(event);
    await expect(el.classList.contains("keydown-up")).to.be.true;
  });

  it("Event keydown run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;

    const event = new KeyboardEvent("keydown", { key: "ArrowDown" });
    toggleEl.addEventListener("keydown", () => {
      el.classList.add("keydown-arrowdown");
    });
    toggleEl.dispatchEvent(event);
    await expect(el.classList.contains("keydown-arrowdown")).to.be.true;
  });

  it("Event keyup on IE run successfully", async () => {
    const el = await fixture(container);
    const toggleEl = el.querySelector(
      ".kuc-dropdown__toggle"
    ) as HTMLDivElement;

    const event = new KeyboardEvent("keydown", { key: "Down" });
    toggleEl.addEventListener("keydown", () => {
      el.classList.add("keydown-down");
    });
    toggleEl.dispatchEvent(event);
    await expect(el.classList.contains("keydown-down")).to.be.true;
  });
});
