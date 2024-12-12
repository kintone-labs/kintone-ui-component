import { expect, fixture } from "@open-wc/testing";

import { Tabs } from "../index";

const items = [
  {
    label: "Tab1",
    value: "tab1",
  },
  {
    label: "Tab2",
    value: "tab2",
  },
  {
    value: "tab3",
    label: "Tab3",
    disabled: true,
  },
];
const noStringValueItems = [{ value: 2 }];
const duplicatedItems = [{ value: "tab1" }, { value: "tab1" }];

describe("Tabs", () => {
  describe("items", () => {
    it("should be disabled when item has disabled property that is true ", async () => {
      const container = new Tabs({ items: items });
      const el = await fixture(container);
      const itemButtons = el.querySelectorAll(
        ".kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab__button ",
      );
      items.forEach((item, index) => {
        expect((itemButtons[index] as HTMLButtonElement).innerText).to.equal(
          item.label,
        );
      });
      expect(itemButtons[2].hasAttribute("disabled")).to.equal(true);
    });

    it("should be throw error when assigned not array", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'items' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Tabs({ items: null });
      container.items = null;
      fixture(container);
    });

    it("should be throw error when assigned duplicated value in items", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'value' property is not unique in items.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Tabs({ items: duplicatedItems });
      fixture(container);
    });

    it("should be throw error when not assigned value in items", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal(
          "'value' property is not specified in items.",
        );
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Tabs({ items: [{ label: "tab" }] });
      fixture(container);
    });
  });
});
