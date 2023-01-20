import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { MobileDatePicker } from "../index";

describe("MobileDatePicker", () => {
  describe("error", () => {
    it("does not display when initializing without props option", async () => {
      const container = new MobileDatePicker({});
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl).has.attribute("hidden");
    });

    it('should be equal "error-message" when initializing error with "error-message"', async () => {
      const container = new MobileDatePicker({ error: "error-message" });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.have.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });

    it('should be replace by "replace-error" when changing by setter', async () => {
      const container = new MobileDatePicker({
        error: "error-message",
      });
      container.error = "replace-error";
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.have.equal("replace-error");
      expect(errorEl).not.has.attribute("hidden");
    });
    it('should be equal "error-message" when click any valid date', async () => {
      const container = new MobileDatePicker({
        error: "error-message",
        value: "2022-12-12",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const selectedElUp = el.querySelector(
        "kuc-base-mobile-datetime-calendar-body .kuc-base-mobile-datetime-calendar-body__table__date--selected"
      ) as HTMLButtonElement;

      const nextEl = selectedElUp?.nextElementSibling as HTMLTableCellElement;
      const buttonEl = nextEl as HTMLElement;
      buttonEl.click();
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      await elementUpdated(container);
      expect(errorEl.innerText).to.have.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });
  });
});
