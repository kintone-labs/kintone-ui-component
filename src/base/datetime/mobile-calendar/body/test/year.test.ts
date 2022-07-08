import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDateTimeCalendarBody", () => {
  describe("year", () => {
    it("The day is not selected when assigning year prop is invalid but value is valid", async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      container.setAttribute("month", "8");
      container.setAttribute("year", "-1");
      container.setAttribute("value", "2021-08-22");
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__date--selected"
      ) as HTMLButtonElement;
      expect(selectedEl.innerText).to.equal("22");
    });

    it("The day is selected when assigning year prop is valid", async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      container.setAttribute("month", "8");
      container.setAttribute("year", "2021");
      container.setAttribute("value", "2021-08-22");
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__date--selected"
      ) as HTMLButtonElement;
      expect(selectedEl.getAttribute("data-date")).to.equal("2021-08-22");
    });
  });
});
