import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("accessibility", () => {
    it("should be 2022 when mousedown on the item 2022", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2021");
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;
      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle__label"
      ) as HTMLSpanElement;

      btnYearToggleEl.click();
      await elementUpdated(container);

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const item101 = itemsEl.children[101];
      item101.dispatchEvent(new CustomEvent("mousedown", { bubbles: true }));
      await elementUpdated(el);

      expect(yearSelectEl.innerText).to.equal("2022");
    });

    it("should open listbox when focus button toggle and press key ArrowDown", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;

      btnMonthToggleEl.focus();
      btnMonthToggleEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })
      );
      await elementUpdated(container);

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];

      expect(itemsEl.children.length).to.equal(201);
    });

    it("should be 2022 when press key Enter 2022 in dropdown", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle__label"
      ) as HTMLSpanElement;
      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.click();
      await elementUpdated(container);

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];

      const eventKeyDown = new KeyboardEvent("keydown", { key: "ArrowDown" });
      const eventKeyEnter = new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true
      });

      itemsEl.dispatchEvent(eventKeyDown);
      itemsEl.dispatchEvent(eventKeyEnter);
      await elementUpdated(container);

      expect(yearSelectEl.innerText).to.equal("2022");
    });

    it("should be FEBRUARY when press key Enter FEBRUARY in dropdown", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle__label"
      ) as HTMLSpanElement;
      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;

      btnMonthToggleEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];

      const eventKeyDown = new KeyboardEvent("keydown", { key: "ArrowDown" });
      const eventKeyEnter = new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true
      });

      itemsEl.dispatchEvent(eventKeyDown);
      itemsEl.dispatchEvent(eventKeyEnter);
      await elementUpdated(container);

      expect(monthSelectEl.innerText).to.equal("FEBRUARY");
    });

    it("should open month dropdown when press key Enter on button month toggle", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;

      btnMonthToggleEl.focus();
      btnMonthToggleEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter" })
      );
      await elementUpdated(container);

      const listBoxElHide = el.querySelector(
        ".kuc-base-datetime-header-month__listbox"
      ) as HTMLSpanElement;
      expect(listBoxElHide.getAttribute("aria-hidden")).to.equal("false");
    });

    it("should open year dropdown when press key Enter on button year toggle", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.focus();
      btnYearToggleEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter" })
      );
      await elementUpdated(container);

      const listBoxElHide = el.querySelector(
        ".kuc-base-datetime-header-year__listbox"
      ) as HTMLSpanElement;
      expect(listBoxElHide.getAttribute("aria-hidden")).to.equal("false");
    });
  });
});
