import { expect, fixture } from "@open-wc/testing";

import { BasePagination } from "../index";

describe("BasePagination", () => {
  describe("clickEvent", () => {
    it("should trigger click event when clicking on Prev button", async () => {
      const handleEvent = (event: any) => {
        expect(event.type).to.equal("kuc:pagination-click-prev");
      };

      const container = new BasePagination();
      await fixture(container);
      container.addEventListener("kuc:pagination-click-prev", handleEvent);

      const prevEl = container.querySelector(
        ".kuc-base-pagination__group__pager-prev"
      ) as HTMLElement;

      prevEl.click();
    });

    it("should trigger click event when clicking on Next button", async () => {
      const handleEvent = (event: any) => {
        expect(event.type).to.equal("kuc:pagination-click-next");
      };

      const container = new BasePagination();
      await fixture(container);
      container.addEventListener("kuc:pagination-click-next", handleEvent);

      const nextEl = container.querySelector(
        ".kuc-base-pagination__group__pager-next"
      ) as HTMLElement;

      nextEl.click();
    });
  });
});
