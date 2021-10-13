import { expect, fixture, elementUpdated } from "@open-wc/testing";
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
        ".kuc-base-datetime-header__year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.click();
      await elementUpdated(container);

      const eventArrowDown = new KeyboardEvent("keydown", { key: "ArrowDown" });
      const eventDown = new KeyboardEvent("keydown", { key: "Down" });

      btnYearToggleEl.dispatchEvent(eventArrowDown);
      const firstHighlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(firstHighlightEl.value).to.equal(2022);

      btnYearToggleEl.dispatchEvent(eventDown);
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
        ".kuc-base-datetime-header__year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.click();
      await elementUpdated(container);

      const eventArrowUp = new KeyboardEvent("keydown", { key: "ArrowUp" });
      const eventUp = new KeyboardEvent("keydown", { key: "Up" });

      btnYearToggleEl.dispatchEvent(eventArrowUp);
      const firstHighlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(firstHighlightEl.value).to.equal(2020);

      btnYearToggleEl.dispatchEvent(eventUp);
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
        ".kuc-base-datetime-header__year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.click();
      await elementUpdated(container);

      const event = new KeyboardEvent("keydown", { key: "Home" });

      btnYearToggleEl.dispatchEvent(event);
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
        ".kuc-base-datetime-header__year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.click();
      await elementUpdated(container);

      const event = new KeyboardEvent("keydown", { key: "End" });
      btnYearToggleEl.dispatchEvent(event);

      const highlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;

      expect(highlightEl.value).to.equal(2121);
    });

    it("should be highlight first item when press key while listbox hide", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2021");
      const el = await fixture(container);

      const yearListboxEl = el.querySelector(
        ".kuc-base-datetime-header__year__listbox"
      ) as HTMLElement;
      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header__year__toggle"
      ) as HTMLButtonElement;

      btnYearToggleEl.focus();
      await elementUpdated(container);

      const eventKeyDown = new KeyboardEvent("keydown", { key: "ArrowDown" });
      btnYearToggleEl.dispatchEvent(eventKeyDown);
      await elementUpdated(container);

      expect(
        yearListboxEl.children[1].children[0].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);
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

      const eventArrowDown = new KeyboardEvent("keydown", { key: "ArrowDown" });
      const eventDown = new KeyboardEvent("keydown", { key: "Down" });

      btnMonthToggleEl.dispatchEvent(eventArrowDown);
      const firstHighlight = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(firstHighlight.value).to.equal(2);

      btnMonthToggleEl.dispatchEvent(eventDown);
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

      const eventArrowUp = new KeyboardEvent("keydown", { key: "ArrowUp" });
      const eventUp = new KeyboardEvent("keydown", { key: "Up" });

      btnMonthToggleEl.dispatchEvent(eventArrowUp);
      const firstHighlight = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;
      expect(firstHighlight.value).to.equal(12);

      btnMonthToggleEl.dispatchEvent(eventUp);
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

      const event = new KeyboardEvent("keydown", { key: "Home" });
      btnMonthToggleEl.dispatchEvent(event);

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

      const event = new KeyboardEvent("keydown", { key: "End" });
      btnMonthToggleEl.dispatchEvent(event);

      const highlightEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox--highlight"
      ) as HTMLLIElement;

      expect(highlightEl.value).to.equal(12);
    });

    it("should be highlight first item when press key while listbox hide", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const monthListboxEl = el.querySelector(
        ".kuc-base-datetime-header-month__listbox"
      ) as HTMLSpanElement;
      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;

      btnMonthToggleEl.focus();
      await elementUpdated(container);

      const eventKeyDown = new KeyboardEvent("keydown", { key: "ArrowDown" });
      btnMonthToggleEl.dispatchEvent(eventKeyDown);
      await elementUpdated(container);

      expect(
        monthListboxEl.children[1].children[0].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);
    });
  });
});
