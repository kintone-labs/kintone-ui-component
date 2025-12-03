import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("DatePicker", () => {
  describe("position", () => {
    it("should be displayed calendar to left when there is not enough width on the right and long label", async () => {
      const container = document.createElement("kuc-date-picker");
      container.setAttribute("value", "2021-10-20");
      container.setAttribute("label", "long label long label long label");

      const divParentEl = document.createElement("div");
      divParentEl.style.paddingLeft = window.innerWidth - 100 + "px";
      divParentEl.appendChild(container);

      const el = await fixture(divParentEl);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;

      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar",
      ) as HTMLElement;
      const computedStyle = window.getComputedStyle(calendarEl);

      expect(computedStyle.position).to.equal("fixed");
      // Calendar should be positioned using left and top properties
      expect(parseInt(calendarEl.style.left, 10)).to.be.greaterThan(0);
    });

    it("should be displayed calendar to top when there is not enough height on the bottom", async () => {
      const container = document.createElement("kuc-base-date");
      container.setAttribute("value", "2021-10-20");

      const divParentEl = document.createElement("div");
      divParentEl.style.paddingTop = window.innerHeight - 50 + "px";
      divParentEl.appendChild(container);

      const el = await fixture(divParentEl);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;

      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar",
      ) as HTMLElement;
      const computedStyle = window.getComputedStyle(calendarEl);

      expect(computedStyle.position).to.equal("fixed");
      // Calendar should be positioned above the input when there's not enough space below
      const calTop = parseInt(calendarEl.style.top, 10);
      const inputRect = inputEl.getBoundingClientRect();
      expect(calTop).to.be.lessThan(inputRect.top);
    });

    it("should be displayed calendar to left when there is not enough width on the right", async () => {
      const container = document.createElement("kuc-base-date");
      container.setAttribute("value", "2021-10-20");

      const divParentEl = document.createElement("div");
      divParentEl.style.paddingTop = window.innerHeight - 50 + "px";
      divParentEl.style.paddingLeft = window.innerWidth - 100 + "px";
      divParentEl.appendChild(container);

      const el = await fixture(divParentEl);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;
      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar",
      ) as HTMLElement;

      // Calendar should be positioned to the left when not enough space on right
      const calLeft = parseInt(calendarEl.style.left, 10);
      expect(calLeft).to.be.greaterThanOrEqual(0);
      // Calendar should be positioned above when not enough space below
      const calTop = parseInt(calendarEl.style.top, 10);
      const inputRect = inputEl.getBoundingClientRect();
      expect(calTop).to.be.lessThan(inputRect.top);
    });

    it("should be displayed calendar to right when there is not enough width on the left", async () => {
      const container = document.createElement("kuc-base-date");
      container.setAttribute("value", "2021-10-20");

      const divParentEl = document.createElement("div");
      divParentEl.style.paddingLeft = window.innerWidth - 100 + "px";
      divParentEl.appendChild(container);

      const el = await fixture(divParentEl);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;
      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar",
      ) as HTMLElement;

      // Calendar should be positioned using left property
      const calLeft = parseInt(calendarEl.style.left, 10);
      expect(calLeft).to.be.greaterThanOrEqual(0);
      // Calendar should be positioned below the input
      const calTop = parseInt(calendarEl.style.top, 10);
      const inputRect = inputEl.getBoundingClientRect();
      expect(calTop).to.be.greaterThanOrEqual(inputRect.bottom);
    });
  });
});
