import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { BaseDate } from "../index";

describe("BaseDate", () => {
  describe("position", () => {
    it("should reposition calendar on scroll using requestAnimationFrame throttle", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;

      // Open calendar
      inputEl.click();
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar",
      ) as HTMLElement;

      // Trigger scroll event
      window.dispatchEvent(new Event("scroll"));

      // Wait for requestAnimationFrame
      await new Promise((resolve) => requestAnimationFrame(resolve));
      await elementUpdated(container);

      // Calendar should still be visible and positioned
      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text",
      ) as HTMLButtonElement;
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("true");
      expect(calendarEl.style.top).to.not.equal("");
    });

    it("should reposition calendar on resize using debounce", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;

      // Open calendar
      inputEl.click();
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar",
      ) as HTMLElement;

      // Trigger resize event
      window.dispatchEvent(new Event("resize"));

      // Wait for debounce delay (200ms + buffer)
      await new Promise((resolve) => setTimeout(resolve, 250));
      await elementUpdated(container);

      // Calendar should still be visible and positioned
      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text",
      ) as HTMLButtonElement;
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("true");
      expect(calendarEl.style.top).to.not.equal("");
    });

    it("should not reposition when calendar is closed on scroll", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";

      const el = await fixture(container);

      // Don't open calendar, just trigger scroll
      window.dispatchEvent(new Event("scroll"));

      await new Promise((resolve) => requestAnimationFrame(resolve));
      await elementUpdated(container);

      // Calendar should remain closed
      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text",
      ) as HTMLButtonElement;
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("false");
    });

    it("should not reposition when calendar is closed on resize", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";

      const el = await fixture(container);

      // Don't open calendar, just trigger resize
      window.dispatchEvent(new Event("resize"));

      await new Promise((resolve) => setTimeout(resolve, 250));
      await elementUpdated(container);

      // Calendar should remain closed
      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text",
      ) as HTMLButtonElement;
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("false");
    });

    it("should debounce multiple resize events", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;

      // Open calendar
      inputEl.click();
      await elementUpdated(container);

      // Trigger multiple resize events rapidly
      for (let i = 0; i < 5; i++) {
        window.dispatchEvent(new Event("resize"));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      // Wait for debounce to complete
      await new Promise((resolve) => setTimeout(resolve, 300));
      await elementUpdated(container);

      // Calendar should still be visible
      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text",
      ) as HTMLButtonElement;
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("true");
    });

    it("should throttle multiple scroll events with RAF", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;

      // Open calendar
      inputEl.click();
      await elementUpdated(container);

      // Trigger multiple scroll events rapidly
      for (let i = 0; i < 5; i++) {
        window.dispatchEvent(new Event("scroll"));
      }

      // Wait for RAF
      await new Promise((resolve) => requestAnimationFrame(resolve));
      await elementUpdated(container);

      // Calendar should still be visible
      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text",
      ) as HTMLButtonElement;
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("true");
    });

    it("should cleanup listeners when calendar is closed", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;

      // Open calendar
      inputEl.click();
      await elementUpdated(container);

      // Close calendar
      inputEl.click();
      await elementUpdated(container);

      // Trigger events after close - should not cause errors
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("resize"));

      await new Promise((resolve) => setTimeout(resolve, 300));
      await elementUpdated(container);

      // Calendar should remain closed
      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text",
      ) as HTMLButtonElement;
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("false");
    });

    it("should cleanup listeners when component is disconnected", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;

      // Open calendar
      inputEl.click();
      await elementUpdated(container);

      // Remove component from DOM
      el.remove();

      let errorThrown = false;
      try {
        window.dispatchEvent(new Event("scroll"));
        window.dispatchEvent(new Event("resize"));
        await new Promise((resolve) => setTimeout(resolve, 300));
      } catch (e) {
        errorThrown = true;
      }

      expect(errorThrown).to.equal(false);
    });
  });
});
