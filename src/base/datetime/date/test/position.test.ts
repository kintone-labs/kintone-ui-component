import { aTimeout, elementUpdated, expect, fixture } from "@open-wc/testing";

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

      inputEl.click();
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar",
      ) as HTMLElement;

      window.dispatchEvent(new Event("scroll"));

      await new Promise((resolve) => requestAnimationFrame(resolve));
      await elementUpdated(container);

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

      inputEl.click();
      await elementUpdated(container);

      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar",
      ) as HTMLElement;

      window.dispatchEvent(new Event("resize"));

      await aTimeout(250);
      await elementUpdated(container);

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

      window.dispatchEvent(new Event("scroll"));

      await new Promise((resolve) => requestAnimationFrame(resolve));
      await elementUpdated(container);

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

      window.dispatchEvent(new Event("resize"));

      await aTimeout(250);
      await elementUpdated(container);

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

      inputEl.click();
      await elementUpdated(container);

      for (let i = 0; i < 5; i++) {
        window.dispatchEvent(new Event("resize"));
        await aTimeout(50);
      }

      await aTimeout(250);
      await elementUpdated(container);

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

      inputEl.click();
      await elementUpdated(container);

      for (let i = 0; i < 5; i++) {
        window.dispatchEvent(new Event("scroll"));
      }

      await new Promise((resolve) => requestAnimationFrame(resolve));
      await elementUpdated(container);

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

      inputEl.click();
      await elementUpdated(container);

      inputEl.click();
      await elementUpdated(container);

      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("resize"));

      await aTimeout(250);
      await elementUpdated(container);

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

      inputEl.click();
      await elementUpdated(container);

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
