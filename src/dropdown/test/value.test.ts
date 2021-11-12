import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

describe("Dropdown", () => {
  describe("value", () => {
    it("should be empty selected item label when not assigned on constructor", async () => {
      const container = new Dropdown({ items: initItems });
      const el = await fixture(container);
      expect(container.value).to.be.equal("");

      const selectedItemLabel = el.querySelector(
        ".kuc-dropdown__group__toggle__selected-item-label"
      );
      expect(selectedItemLabel?.textContent).to.equal("");

      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );
      const svgsEl0 = itemsEl[0].querySelectorAll("svg");
      expect(svgsEl0.length).to.equal(0);
      expect(itemsEl[0].getAttribute("aria-selected")).to.equal("false");

      const svgsEl1 = itemsEl[1].querySelectorAll("svg");
      expect(svgsEl1.length).to.equal(0);
      expect(itemsEl[1].getAttribute("aria-selected")).to.equal("false");

      const svgsEl2 = itemsEl[2].querySelectorAll("svg");
      expect(svgsEl2.length).to.equal(0);
      expect(itemsEl[2].getAttribute("aria-selected")).to.equal("false");
    });

    it("should be set to selected item label when assigned on constructor", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[1].value
      });
      const el = await fixture(container);
      expect(container.value).to.be.equal(initItems[1].value);

      const selectedItemLabel = el.querySelector(
        ".kuc-dropdown__group__toggle__selected-item-label"
      );
      expect(selectedItemLabel?.textContent).to.equal(initItems[1].label);

      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );
      const svgsEl0 = itemsEl[0].querySelectorAll("svg");
      expect(svgsEl0.length).to.equal(0);
      expect(itemsEl[0].getAttribute("aria-selected")).to.equal("false");

      const svgsEl1 = itemsEl[1].querySelectorAll("svg");
      expect(svgsEl1.length).to.equal(1);
      expect(itemsEl[1].getAttribute("aria-selected")).to.equal("true");

      const svgsEl2 = itemsEl[2].querySelectorAll("svg");
      expect(svgsEl2.length).to.equal(0);
      expect(itemsEl[2].getAttribute("aria-selected")).to.equal("false");
    });
  });

  it("should be updated by setter", async () => {
    const container = new Dropdown({
      items: initItems,
      value: initItems[0].value
    });
    container.value = initItems[1].value;

    const el = await fixture(container);
    expect(container.value).to.be.equal(initItems[1].value);

    const selectedItemLabel = el.querySelector(
      ".kuc-dropdown__group__toggle__selected-item-label"
    );
    expect(selectedItemLabel?.textContent).to.equal(initItems[1].label);

    const itemsEl = el.querySelectorAll(
      ".kuc-dropdown__group__select-menu__item"
    );
    const svgsEl0 = itemsEl[0].querySelectorAll("svg");
    expect(svgsEl0.length).to.equal(0);
    expect(itemsEl[0].getAttribute("aria-selected")).to.equal("false");

    const svgsEl1 = itemsEl[1].querySelectorAll("svg");
    expect(svgsEl1.length).to.equal(1);
    expect(itemsEl[1].getAttribute("aria-selected")).to.equal("true");

    const svgsEl2 = itemsEl[2].querySelectorAll("svg");
    expect(svgsEl2.length).to.equal(0);
    expect(itemsEl[2].getAttribute("aria-selected")).to.equal("false");
  });

  it("should be null when assigned null on constructor", async () => {
    // @ts-ignore
    const container = new Dropdown({ items: initItems, value: null });

    const el = await fixture(container);
    expect(container.value).to.be.equal(null);

    const selectedItemLabel = el.querySelector(
      ".kuc-dropdown__group__toggle__selected-item-label"
    );
    expect(selectedItemLabel?.textContent).to.equal("");

    const itemsEl = el.querySelectorAll(
      ".kuc-dropdown__group__select-menu__item"
    );
    const svgsEl0 = itemsEl[0].querySelectorAll("svg");
    expect(svgsEl0.length).to.equal(0);
    expect(itemsEl[0].getAttribute("aria-selected")).to.equal("false");

    const svgsEl1 = itemsEl[1].querySelectorAll("svg");
    expect(svgsEl1.length).to.equal(0);
    expect(itemsEl[1].getAttribute("aria-selected")).to.equal("false");

    const svgsEl2 = itemsEl[2].querySelectorAll("svg");
    expect(svgsEl2.length).to.equal(0);
    expect(itemsEl[2].getAttribute("aria-selected")).to.equal("false");
  });

  it("should be null when set null by setter", async () => {
    const container = new Dropdown({
      items: initItems,
      value: initItems[0].value
    });
    // @ts-ignore
    container.value = null;

    const el = await fixture(container);
    expect(container.value).to.be.equal(null);

    const selectedItemLabel = el.querySelector(
      ".kuc-dropdown__group__toggle__selected-item-label"
    );
    expect(selectedItemLabel?.textContent).to.equal("");

    const itemsEl = el.querySelectorAll(
      ".kuc-dropdown__group__select-menu__item"
    );
    const svgsEl0 = itemsEl[0].querySelectorAll("svg");
    expect(svgsEl0.length).to.equal(0);
    expect(itemsEl[0].getAttribute("aria-selected")).to.equal("false");

    const svgsEl1 = itemsEl[1].querySelectorAll("svg");
    expect(svgsEl1.length).to.equal(0);
    expect(itemsEl[1].getAttribute("aria-selected")).to.equal("false");

    const svgsEl2 = itemsEl[2].querySelectorAll("svg");
    expect(svgsEl2.length).to.equal(0);
    expect(itemsEl[2].getAttribute("aria-selected")).to.equal("false");
  });

  it("should be set to nonexistent value", async () => {
    const container = new Dropdown({
      items: initItems,
      value: initItems[0].value
    });
    container.value = "nonexistent";

    const el = await fixture(container);
    expect(container.value).to.be.equal("nonexistent");

    const selectedItemLabel = el.querySelector(
      ".kuc-dropdown__group__toggle__selected-item-label"
    );
    expect(selectedItemLabel?.textContent).to.equal("");

    const itemsEl = el.querySelectorAll(
      ".kuc-dropdown__group__select-menu__item"
    );
    const svgsEl0 = itemsEl[0].querySelectorAll("svg");
    expect(svgsEl0.length).to.equal(0);
    expect(itemsEl[0].getAttribute("aria-selected")).to.equal("false");

    const svgsEl1 = itemsEl[1].querySelectorAll("svg");
    expect(svgsEl1.length).to.equal(0);
    expect(itemsEl[1].getAttribute("aria-selected")).to.equal("false");

    const svgsEl2 = itemsEl[2].querySelectorAll("svg");
    expect(svgsEl2.length).to.equal(0);
    expect(itemsEl[2].getAttribute("aria-selected")).to.equal("false");
  });

  it("should be set to number value", async () => {
    const container = new Dropdown({
      items: initItems,
      value: initItems[0].value
    });
    // @ts-ignore
    container.value = 1;

    const el = await fixture(container);
    expect(container.value).to.be.equal(1);

    const selectedItemLabel = el.querySelector(
      ".kuc-dropdown__group__toggle__selected-item-label"
    );
    expect(selectedItemLabel?.textContent).to.equal("");

    const itemsEl = el.querySelectorAll(
      ".kuc-dropdown__group__select-menu__item"
    );
    const svgsEl0 = itemsEl[0].querySelectorAll("svg");
    expect(svgsEl0.length).to.equal(0);
    expect(itemsEl[0].getAttribute("aria-selected")).to.equal("false");

    const svgsEl1 = itemsEl[1].querySelectorAll("svg");
    expect(svgsEl1.length).to.equal(0);
    expect(itemsEl[1].getAttribute("aria-selected")).to.equal("false");

    const svgsEl2 = itemsEl[2].querySelectorAll("svg");
    expect(svgsEl2.length).to.equal(0);
    expect(itemsEl[2].getAttribute("aria-selected")).to.equal("false");
  });
});
