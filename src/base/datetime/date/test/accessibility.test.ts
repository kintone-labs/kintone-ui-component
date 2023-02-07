import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { BaseDate } from "../index";

describe("BaseDate", () => {
  describe("accessibility", () => {
    it("should be closed calendar when pressing Escapse key", async () => {
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

      inputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      await elementUpdated(container);
      await elementUpdated(el);
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("false");
    });

    it("should do nothing when pressing not handled key", async () => {
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

      inputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
      await elementUpdated(container);
      await elementUpdated(el);
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("true");
    });

    it("should do not open calendar when pressing Tab key", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";
      const el = await fixture(container);

      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text"
      ) as HTMLButtonElement;

      assistiveText.focus();

      assistiveText.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
      await elementUpdated(container);
      await elementUpdated(el);
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("false");
    });

    it("should do not open calendar when pressing not handled key", async () => {
      const container = new BaseDate();
      container.language = "en";
      container.value = "2021-10-20";
      const el = await fixture(container);

      const assistiveText = el.querySelector(
        ".kuc-base-date__assistive-text"
      ) as HTMLButtonElement;

      assistiveText.focus();

      assistiveText.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
      await elementUpdated(container);
      await elementUpdated(el);
      expect(assistiveText.getAttribute("aria-expanded")).to.equal("false");
    });
    // TODO: handle event kuc:calendar-header-previous-shifttab
  });
});
