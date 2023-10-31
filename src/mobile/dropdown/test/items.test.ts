import { expect, fixture } from "@open-wc/testing";

import { MobileDropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];
const initItemsWithoutLabel = [
  { value: "-----" },
  { value: "orange" },
  { value: "apple" },
];
const initItemsWithoutValue = [{ label: "-----" }];
const replacedItems = [
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];
const disabledItems = [
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple", disabled: true },
];

const expectedLabels = ["-----", "Orange", "Apple"];
const expectedValues = ["-----", "orange", "apple"];

describe("MobileDropdown", () => {
  describe("items", () => {
    it("does not exists on element when initializing without props option", async () => {
      const container = new MobileDropdown();
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(0);
    });

    it("exists on element when initializing with props option", async () => {
      const container = new MobileDropdown({ items: initItems });
      expect(container.items).to.be.equal(initItems);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
      }
    });

    it("exists on element when changing by setter", async () => {
      const container = new MobileDropdown();

      container.items = initItems;
      expect(container.items).to.be.equal(initItems);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
      }
    });

    it("exists on element and set label as the same as value when initializing with props option without label", async () => {
      const container = new MobileDropdown({ items: initItemsWithoutLabel });
      expect(container.items).to.be.equal(initItemsWithoutLabel);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedValues[i]);
      }
    });
    it('exists on element and set value "" when initializing with props option without value', async () => {
      const container = new MobileDropdown({ items: initItemsWithoutValue });
      expect(container.items).to.be.equal(initItemsWithoutValue);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(1);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal("");
      }
    });
    it("should be replaced successfully", async () => {
      const container = new MobileDropdown({ items: initItems });
      container.items = replacedItems;
      expect(container.items).to.be.equal(replacedItems);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(2);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i + 1]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i + 1]);
      }
    });

    it("show error when initializing with props is null", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'items' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MobileDropdown({ items: null });
      fixture(container);
    });

    it("show error when when changing by setter to null", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'items' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MobileDropdown({});
      container.items = null;
      fixture(container);
    });

    it("option should have disabled attribute when item with disabled is true", async () => {
      const container = new MobileDropdown({ items: disabledItems });
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl[1]).to.have.attr("disabled");
      expect(itemsEl[0]).to.not.have.attr("disabled");
    });
  });
});
