import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../../../listbox";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("Highlight year dropdown", () => {
    it("should highlight 2022/2023 when press key ArrowDown/Down", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2021");
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const liEl = itemsEl.children[0] as HTMLLIElement;

      const eventArrowDown = new KeyboardEvent("keydown", { key: "ArrowDown" });
      const eventDown = new KeyboardEvent("keydown", { key: "Down" });

      liEl.dispatchEvent(eventArrowDown);
      const firstHighlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(firstHighlightEl.value).to.equal(2022);

      liEl.dispatchEvent(eventDown);
      const secondHiglightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(secondHiglightEl.value).to.equal(2023);
    });

    it("should highlight 2020/2019 in dropdown when press key ArrowUp/Up", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2021");
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const liEl = itemsEl.children[0] as HTMLLIElement;

      const eventArrowUp = new KeyboardEvent("keydown", { key: "ArrowUp" });
      const eventUp = new KeyboardEvent("keydown", { key: "Up" });

      liEl.dispatchEvent(eventArrowUp);
      const firstHighlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(firstHighlightEl.value).to.equal(2020);

      liEl.dispatchEvent(eventUp);
      const secondHighlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(secondHighlightEl.value).to.equal(2019);
    });

    it("should higlight first item when press key Home", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2021");
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const liEl = itemsEl.children[0] as HTMLLIElement;

      const event = new KeyboardEvent("keydown", { key: "Home" });
      liEl.dispatchEvent(event);

      const highlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;

      expect(highlightEl.value).to.equal(1921);
    });

    it("should highlight last item when press key End", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2021");
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const liEl = itemsEl.children[0] as HTMLLIElement;

      const event = new KeyboardEvent("keydown", { key: "End" });
      liEl.dispatchEvent(event);

      const highlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;

      expect(highlightEl.value).to.equal(2121);
    });
  });

  describe("Highlight month dropdown", () => {
    it("should highlight 2/3 in dropdown when press key ArrowDown/Down", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;

      btnMonthToggleEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const liEl = itemsEl.children[0] as HTMLLIElement;

      const eventArrowDown = new KeyboardEvent("keydown", { key: "ArrowDown" });
      const eventDown = new KeyboardEvent("keydown", { key: "Down" });

      liEl.dispatchEvent(eventArrowDown);
      const firstHighlight = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(firstHighlight.value).to.equal(2);

      liEl.dispatchEvent(eventDown);
      const secondHighlight = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(secondHighlight.value).to.equal(3);
    });

    it("should highlight 12/11 in dropdown when press key ArrowUp/Up", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;

      btnMonthToggleEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const liEl = itemsEl.children[0] as HTMLLIElement;

      const eventArrowUp = new KeyboardEvent("keydown", { key: "ArrowUp" });
      const eventUp = new KeyboardEvent("keydown", { key: "Up" });

      liEl.dispatchEvent(eventArrowUp);
      const firstHighlight = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(firstHighlight.value).to.equal(12);

      liEl.dispatchEvent(eventUp);
      const secondHighlight = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(secondHighlight.value).to.equal(11);
    });

    it("should higlight first item when press key Home", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;

      btnMonthToggleEl.click();
      await elementUpdated(container);

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const liEl = itemsEl.children[0] as HTMLLIElement;

      const event = new KeyboardEvent("keydown", { key: "Home" });
      liEl.dispatchEvent(event);

      const highlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;

      expect(highlightEl.value).to.equal(1);
    });

    it("should highlight last item in dropdown when press key End", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2021");
      const el = await fixture(container);

      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;

      btnMonthToggleEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const liEl = itemsEl.children[0] as HTMLLIElement;

      const event = new KeyboardEvent("keydown", { key: "End" });
      liEl.dispatchEvent(event);

      const highlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;

      expect(highlightEl.value).to.equal(12);
    });
  });
});
