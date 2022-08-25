import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BasePagination", () => {
  describe("Click events", () => {
    it("should trigger click event when clicking on Next button ", async () => {
      const container = document.createElement(
        "kuc-base-pagination"
      ) as HTMLInputElement;
      let dispatchedEventName;
      container.addEventListener("kuc:pagination-click-next", (event) => {
        dispatchedEventName = event.type;
      });
      await fixture(container);
      const nextEl = document.querySelector(
        "button.kuc-base-pagination__group__pager-next"
      ) as HTMLElement;
      nextEl.click();
      await elementUpdated(nextEl);
      expect(dispatchedEventName).to.equal("kuc:pagination-click-next");
    });

    it("should trigger click event when clicking on Previous button ", async () => {
      const container = document.createElement(
        "kuc-base-pagination"
      ) as HTMLInputElement;
      let dispatchedEventName;
      container.addEventListener("kuc:pagination-click-prev", (event) => {
        dispatchedEventName = event.type;
      });
      await fixture(container);
      const nextEl = document.querySelector(
        "button.kuc-base-pagination__group__pager-prev"
      ) as HTMLElement;
      nextEl.click();
      await elementUpdated(nextEl);
      expect(dispatchedEventName).to.equal("kuc:pagination-click-prev");
    });
  });
});
