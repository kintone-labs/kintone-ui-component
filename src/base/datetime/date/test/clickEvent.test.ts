import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { BaseDate } from "../index";

describe("BaseDate", () => {
  describe("clickEvent", () => {
    it("should be closed calendar when calendar is opening and click to input value", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";
      container.inputAriaLabel = "inputAriaLabel";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text"
      ) as HTMLButtonElement;

      expect(assistiveText.getAttribute("aria-expanded")).to.equal("true");

      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("false");
    });

    it("should be closed calendar when calendar is opening and click to none button", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";
      container.inputAriaLabel = "inputAriaLabel";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text"
      ) as HTMLButtonElement;

      expect(assistiveText.getAttribute("aria-expanded")).to.equal("true");

      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      buttonEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("false");
    });
  });
});
