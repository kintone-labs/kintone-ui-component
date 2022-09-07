import { expect, fixture } from "@open-wc/testing";
import { BasePagination } from "../index";

describe("BasePagination", () => {
  describe("Click events", () => {
    it("should trigger click event when clicking on Prev button", (done) => {
      const handleEvent = (event: any) => {
        expect(event.type).to.equal("kuc:pagination-click-prev");
        done();
      };

      const container = new BasePagination();
      fixture(container).then(() => {
        container.addEventListener("kuc:pagination-click-prev", handleEvent);

        const nextEl = container.querySelector(
          ".kuc-base-pagination__group__pager-prev"
        ) as HTMLElement;
        nextEl.click();
      });
    });

    it("should trigger click event when clicking on Next button", (done) => {
      const handleEvent = (event: any) => {
        expect(event.type).to.equal("kuc:pagination-click-next");
        done();
      };

      const container = new BasePagination();
      fixture(container).then(() => {
        container.addEventListener("kuc:pagination-click-next", handleEvent);

        const nextEl = container.querySelector(
          ".kuc-base-pagination__group__pager-next"
        ) as HTMLElement;
        nextEl.click();
      });
    });
  });
});
