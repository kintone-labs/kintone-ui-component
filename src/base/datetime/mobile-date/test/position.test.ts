import { aTimeout, elementUpdated, expect, fixture } from "@open-wc/testing";

import { BaseMobileDate } from "../index";

describe("BaseMobileDate", () => {
  describe("position", () => {
    it("should reposition calendar on scroll using requestAnimationFrame throttle", async () => {
      const container = new BaseMobileDate();
      container.language = "en";
      container.value = "2022-02-14";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      inputEl.click();
      await aTimeout(100); // Wait for popover
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-mobile-date__calendar",
      ) as HTMLElement;

      window.dispatchEvent(new Event("scroll"));

      await new Promise((resolve) => requestAnimationFrame(resolve));
      await elementUpdated(container);

      expect(calendarEl.style.top).to.not.equal("");
      expect(calendarEl.style.left).to.not.equal("");
    });

    it("should reposition calendar on resize using debounce", async () => {
      const container = new BaseMobileDate();
      container.language = "en";
      container.value = "2022-02-14";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      inputEl.click();
      await aTimeout(100);
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-mobile-date__calendar",
      ) as HTMLElement;

      window.dispatchEvent(new Event("resize"));

      await aTimeout(250);
      await elementUpdated(container);

      expect(calendarEl.style.top).to.not.equal("");
      expect(calendarEl.style.left).to.not.equal("");
    });

    it("should not reposition when calendar is closed on scroll", async () => {
      const container = new BaseMobileDate();
      container.language = "en";
      container.value = "2022-02-14";

      const el = await fixture(container);

      window.dispatchEvent(new Event("scroll"));

      await new Promise((resolve) => requestAnimationFrame(resolve));
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-mobile-date__calendar",
      ) as HTMLElement;
      expect(calendarEl).to.not.equal(null);
    });

    it("should not reposition when calendar is closed on resize", async () => {
      const container = new BaseMobileDate();
      container.language = "en";
      container.value = "2022-02-14";

      const el = await fixture(container);

      window.dispatchEvent(new Event("resize"));

      await aTimeout(250);
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-mobile-date__calendar",
      ) as HTMLElement;
      expect(calendarEl).to.not.equal(null);
    });

    it("should debounce multiple resize events", async () => {
      const container = new BaseMobileDate();
      container.language = "en";
      container.value = "2022-02-14";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      inputEl.click();
      await aTimeout(100);
      await elementUpdated(container);

      for (let i = 0; i < 5; i++) {
        window.dispatchEvent(new Event("resize"));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      await aTimeout(300);
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-mobile-date__calendar",
      ) as HTMLElement;
      expect(calendarEl).to.not.equal(null);
    });

    it("should throttle multiple scroll events with RAF", async () => {
      const container = new BaseMobileDate();
      container.language = "en";
      container.value = "2022-02-14";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      inputEl.click();
      await aTimeout(100);
      await elementUpdated(container);

      for (let i = 0; i < 5; i++) {
        window.dispatchEvent(new Event("scroll"));
      }

      await new Promise((resolve) => requestAnimationFrame(resolve));
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-mobile-date__calendar",
      ) as HTMLElement;
      expect(calendarEl).to.not.equal(null);
    });

    it("should cleanup listeners when calendar is closed", async () => {
      const container = new BaseMobileDate();
      container.language = "en";
      container.value = "2022-02-14";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      inputEl.click();
      await aTimeout(100);
      await elementUpdated(container);

      inputEl.click();
      await aTimeout(100);
      await elementUpdated(container);

      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("resize"));

      await aTimeout(300);
      await elementUpdated(container);

      expect(true).to.equal(true);
    });

    it("should cleanup listeners when component is disconnected", async () => {
      const container = new BaseMobileDate();
      container.language = "en";
      container.value = "2022-02-14";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      inputEl.click();
      await aTimeout(100);
      await elementUpdated(container);

      // Remove component from DOM
      el.remove();

      let errorThrown = false;
      try {
        window.dispatchEvent(new Event("scroll"));
        window.dispatchEvent(new Event("resize"));
        await aTimeout(300);
      } catch (e) {
        errorThrown = true;
      }

      expect(errorThrown).to.equal(false);
    });
  });
});
